import { Component } from '@angular/core';
import {Counter} from '../../products/components/counter/counter';
import {Temperature} from '../../products/components/temperature/temperature';
import {LikeCounter} from '../../products/components/like-counter/like-counter';

@Component({
  selector: 'app-bean-page',
  imports: [
    Counter,
    Temperature,
    LikeCounter
  ],
  template: `
    <app-counter></app-counter>
    <app-temperature></app-temperature>
    <app-like-counter></app-like-counter>
  `,
  styles: ``
})
export default class BeanPage {

}
