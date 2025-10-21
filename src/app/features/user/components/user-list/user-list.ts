import {Component, inject, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';

export type User = {
  id:number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList {
  private http = inject(HttpClient);

  users = signal<User[]>([]);
  isLoading = signal<boolean>(false);
  error = signal<string | null> (null);

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers() {
    try {
      this.isLoading.set(true);
      this.error.set(null);

      const users = await firstValueFrom(
        this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
      );

      this.users.set(users);
    } catch (err) {
      this.error.set('Erreur lors du chargement des utilisateurs');
      console.log('Erreur API : ', err);
    } finally {
      this.isLoading.set(false);
    }
  }

  async refresh() {
    await this.loadUsers();
  }
}
