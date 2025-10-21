import { Component } from '@angular/core';
import {Counter} from '../../products/components/counter/counter';
import {Temperature} from '../../products/components/temperature/temperature';
import {LikeCounter} from '../../products/components/like-counter/like-counter';
import {UserList} from '../../user/components/user-list/user-list';
import {PhotoGallery} from '../../products/components/photo-gallery/photo-gallery';

@Component({
  selector: 'app-bean-page',
  imports: [
    Counter,
    Temperature,
    LikeCounter,
    UserList,
    PhotoGallery
  ],
  template: `
    <app-counter></app-counter>
    <app-temperature></app-temperature>
    <app-like-counter></app-like-counter>
    <app-user-list></app-user-list>
    <app-photo-gallery></app-photo-gallery>
  `,
  styles: ``
})
export default class BeanPage {

}
