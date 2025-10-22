import { ResolveFn } from '@angular/router';
import {inject} from '@angular/core';
import {UserApi} from '../../features/user/services/user-api';
import {User} from '../../features/user/services/models/user.model';

export const userResolver: ResolveFn<User[]> = () => {
  const userApi = inject(UserApi);
  return userApi.getUsers();
};
