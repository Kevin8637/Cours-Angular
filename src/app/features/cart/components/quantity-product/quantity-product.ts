import {Component, inject, input} from '@angular/core';
import {CartFacade} from '../../services/cart.facade';
import {CartItemModel} from '../../models/product.model';

@Component({
  selector: 'app-quantity-product',
  imports: [],
  templateUrl: './quantity-product.html',
  styleUrl: './quantity-product.scss'
})
export class QuantityProduct {
  cartItem = input.required<CartItemModel>();
  increment = inject(CartFacade).incrementQuantity;
  decrement = inject(CartFacade).decrementQuantity;
}
