import {inject, Injectable} from '@angular/core';
import {UserApi} from './user-api';
import {UserStore} from './user.store';
import {CreateUser} from './models/create-user.model';
import {User} from './models/user.model';
import {UserRules} from './domain/user.rules';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  private userApi = inject(UserApi);
  private userStore = inject(UserStore);

  async createUser(userData: CreateUser): Promise<User>{
    UserRules.validate(userData);

    const user = await this.userApi.createUser(userData);

    this.userStore.addUser(user);

    return user;
  }
}
