import { Component } from '@angular/core';
import {Counter} from '../../products/components/counter/counter';
import {Temperature} from '../../products/components/temperature/temperature';
import {PhotoGallery} from '../../products/components/photo-gallery/photo-gallery';

@Component({
  selector: 'app-bean-page',
  imports: [
    Counter,
    Temperature,
    PhotoGallery
  ],
  template: `
    <app-counter></app-counter>
    <app-temperature></app-temperature>
    <app-photo-gallery></app-photo-gallery>
  `,
  styles: ``
})
export default class BeanPage {

}
