import {computed, Injectable, signal} from '@angular/core';
import {User} from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserStore {
  private usersSignal = signal<User[]>([]);

  users = computed(() => this.usersSignal());
  userCount = computed(() => this.usersSignal().length);

  setUser(users: User[]) {
    this.usersSignal.set(users);
  }

  addUser(user: User) {
    this.usersSignal.update(users => [...users, user]);
  }

  updateUser(updated: User) {
    this.usersSignal.update(users => users.map(u => (u.id === updated.id ? updated : u)));
  }

  removeUser(id: string) {
    this.usersSignal.update(users => users.filter(u => u.id !== id));
  }

  clear(): void {
    this.usersSignal.set([]);
  }
}
