import {Component, inject, input} from '@angular/core';
import {CartItemModel} from '../../models/product.model';
import {CartFacade} from '../../services/cart.facade';
import {QuantityProduct} from '../quantity-product/quantity-product';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-cart-item',
  imports: [
    QuantityProduct,
    NgOptimizedImage
  ],
  templateUrl: './cart-item.html',
  styleUrl: './cart-item.scss'
})
export class CartItem {
  cartItem = input.required<CartItemModel>();
  private cartFacade = inject(CartFacade);

  removeItem(id: number) {
    this.cartFacade.removeProductOfCart(id);
  }
}
