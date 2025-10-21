import {Component, inject, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../user-list/user-list';
import {firstValueFrom} from 'rxjs';

type Post = {
  id: number;
}

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss'
})
export class UserDetail {
  private http = inject(HttpClient);

  user = signal<User[]>([]);
  posts = signal<Post[]>([]);
  isLoading = signal<boolean>(false);

  async loadUserDetails(userId: number) {
    try{
      this.isLoading.set(true);

      const[user, posts] = await Promise.all([
        firstValueFrom(this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/2')),
        firstValueFrom(this.http.get<User[]>('https://jsonplaceholder.typicode.com/users/2'))
      ]);
      this.user.set(user);
      this.posts.set(posts);
    } catch(err) {
      console.error('Erreur : ', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  async delete(postId: number) {
    try {
      await firstValueFrom((this.http.delete(`/posts/${postId}`)));
      this.posts.update(posts => posts.filter(p => p.id === postId));
    } catch(err) {
      console.error('Erreur suppression : ', err);
    }
  }
}
