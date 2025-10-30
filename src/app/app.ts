import {Component, inject, signal} from '@angular/core';
import {Footer} from './core/components/footer/footer';
import {Header} from './core/components/header/header';
import {RouterOutlet} from '@angular/router';
import {GlobalSpinner} from './core/components/global-spinner';
import {ErrorService} from './core/services/error.service';

@Component({
  selector: 'app-root',
  imports: [Footer, Header, RouterOutlet, GlobalSpinner],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('E-shop');
  error = inject(ErrorService).error;
}
