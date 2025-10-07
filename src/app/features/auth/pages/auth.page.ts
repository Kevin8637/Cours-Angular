import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-auth.page',
  imports: [
    RouterOutlet,
  ],
  template: `
      <router-outlet></router-outlet>
  `,
  styles: ``
})
export default class AuthPage {

}
