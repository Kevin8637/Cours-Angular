import { Component, signal } from '@angular/core';
import {Footer} from './core/components/footer/footer';
import {Header} from './core/components/header/header';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('E-shop');
}
