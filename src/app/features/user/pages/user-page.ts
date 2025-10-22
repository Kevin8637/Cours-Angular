import { Component } from '@angular/core';
import {UserList} from '../components/user-list/user-list';

@Component({
  selector: 'app-user-page',
  imports: [
    UserList
  ],
  template: `
    <app-user-list></app-user-list>
  `,
  styles: ``
})
export default class UserPage {

}
