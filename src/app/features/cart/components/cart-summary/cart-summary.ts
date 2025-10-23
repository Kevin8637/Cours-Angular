import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {CartStore} from '../../services/cart.store';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './cart-summary.html',
  styleUrl: './cart-summary.scss'
})
export class CartSummary {
  private cartStore = inject(CartStore)

  productsInCart = this.cartStore.cart;

  totalPriceOfProducts = this.cartStore.totalPrice;

  deleteProduct(id: number) {
    const first = this.productsInCart()[0];
    if (first) {
      this.cartStore.removeFromCart(id);
    }
  }

  clearCart(): void {
    this.cartStore.clearCart();
  }
}
