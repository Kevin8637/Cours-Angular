import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {User} from './models/user.model';
import {BaseApi} from '../../../shared/services/base.api';
import {CreateUser} from './models/create-user.model';
import {UpdateUser} from './models/update-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApi extends BaseApi {
  constructor() {
    super('https://jsonplaceholder.typicode.com');
  }

  async getUsers(): Promise<User[]> {
    return this.get<User[]>('/users');
  }

  async getUserById(id:string): Promise<User> {
    return this.get<User>(`/users/${id}`);
  }

  async createUser(user: CreateUser): Promise<User> {
    return this.post<User>('/users', user);
  }

  async updateUser(id: string, user: UpdateUser): Promise<User> {
    return this.put<User>(`/users/${id}`, user);
  }

  async deleteUser(id:string): Promise<void> {
    return this.delete<void>(`/users/${id}`);
  }
}
