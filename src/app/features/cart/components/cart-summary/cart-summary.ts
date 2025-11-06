import {Component, computed, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {CartStore} from '../../services/cart.store';
import {RouterLink} from '@angular/router';
import {QuantityProduct} from '../quantity-product/quantity-product';
import {CartFacade} from '../../services/cart.facade';
import {CartItem} from '../cart-item/cart-item';

@Component({
  selector: 'app-cart-summary',
  imports: [
    RouterLink,
    CartItem
  ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss'
})
export class CartSummary {
  private cartFacade = inject(CartFacade);
  productsInCart = computed(() => this.cartFacade.cart());
  totalPriceOfProducts = computed(() => this.cartFacade.total());
  count = computed(() => this.cartFacade.count());

  clearCart(): void {
    this.cartFacade.clearCart();
  }
}
