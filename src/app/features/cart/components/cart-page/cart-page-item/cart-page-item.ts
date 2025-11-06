import {Component, computed, inject} from '@angular/core';

import {CartFacade} from '../../../services/cart.facade';
import {CartItem} from '../../cart-item/cart-item';
import {CartPageAside} from '../cart-page-aside/cart-page-aside';

@Component({
  selector: 'app-cart-page-item',
  imports: [
    CartItem,
    CartPageAside

  ],
  templateUrl: './cart-page-item.html',
  styleUrl: './cart-page-item.scss'
})
export class CartPageItem {
  private cartFacade = inject(CartFacade);
  productsInCart = computed(() => this.cartFacade.cart());
}
