import {Component, inject, OnInit, signal} from '@angular/core';
import {UserApi} from '../../services/user-api';
import {User} from '../../services/models/user.model';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList implements OnInit {
  private userApi = inject(UserApi);

  users = signal<User[]>([]);
  isLoading = signal<boolean>(false);
  isDeleting = signal<string | null>(null);
  errorMessage = signal<string | null> (null);

  async ngOnInit() {
    await this.loadUsers();
  }

  async loadUsers() {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    const users = await this.userApi.getUsers();
    this.users.set(users);
  }

  async deleteUser(userId:string) {
    this.isDeleting.set(userId);

    await this.userApi.deleteUser(userId);
    this.users.update(users => users.filter(u => u.id !== userId));
  }
}
