import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {Navigation} from '../navigation/navigation';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    Navigation,
    NgOptimizedImage
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  route = inject(Router);

  redirectToMenu() {
    this.route.navigate(['/'])
}
}
