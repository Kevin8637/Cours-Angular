import {Component, inject, OnInit, signal} from '@angular/core';
import {UserApi} from '../../services/user-api';
import {User} from '../../services/models/user.model';
import {UserStore} from '../../services/user.store';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss'
})
export class UserList {

  private userStore = inject(UserStore);

  users = this.userStore.users;
  count = this.userStore.userCount;

  addRandomUser(){
    const newUser: User = {
      id : Math.random().toString(36).substring(2,9),
      name: 'Random ' + Math.floor(Math.random()*100),
      email: 'random@example.com'
    };
    this.userStore.addUser(newUser);
  }

  updateFirstUser(){
    const first = this.users()[0];
    if(first){
      this.userStore.updateUser({...first, name: first.name + ' (modifié)'});
    }
  }

  deleteUser(id: string){
    this.userStore.removeUser(id);
  }

  clearUsers(){
    this.userStore.clear();
  }

  loadMockUsers(){
    const mockUsers: User[] = [
      {id : '1', name : 'Alice', email : 'alice@example.com'},
      {id : '2', name : 'Bob', email : 'bob@example.com'}
    ];
    this.userStore.setUser(mockUsers);
  }
  // isLoading = signal<boolean>(false);
  // isDeleting = signal<string | null>(null);
  // errorMessage = signal<string | null> (null);

  // async ngOnInit() {
  //   await this.loadUsers();
  // }
  //
  // async loadUsers() {
  //   this.isLoading.set(true);
  //   this.errorMessage.set(null);
  //
  //   const users = await this.userApi.getUsers();
  // }
  //
  // async deleteUser(userId:string) {
  //   this.isDeleting.set(userId);
  //
  //   await this.userApi.deleteUser(userId);
  // }
}
