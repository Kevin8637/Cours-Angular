import { Component } from '@angular/core';
import {Header} from '../header/header';
import {Navigation} from '../navigation/navigation';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    Navigation,
    NgOptimizedImage
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
