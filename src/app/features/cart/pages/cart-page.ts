import { Component } from '@angular/core';
import {CartPageItem} from '../components/cart-page/cart-page-item/cart-page-item';

@Component({
  selector: 'app-cart-page',
  imports: [
    CartPageItem
  ],
  template: `
    <app-cart-page-item></app-cart-page-item>
  `,
  styles: ``
})
export default class CartPage {

}
