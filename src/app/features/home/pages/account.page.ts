import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-account.page',
  imports: [RouterOutlet, RouterLink],
  template: `
    <h2>Mon Compte</h2>
    <nav>
      <a routerLink="profile">Profil</a>
      <a routerLink="orders">Commandes</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styles: ``
})
export class AccountPage {

}
