import {inject, Injectable} from '@angular/core';
import {CartApi} from './cart.api';
import {CartStore} from './cart.store';
import {Product} from '../../products/services/models/product.model';
import {CartRules} from '../domain/cart.rules';
import {CartItemModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  private cartApi = inject(CartApi);
  private cartStore = inject(CartStore);

  addToCart(item: Product) {
    this.cartApi.addToCart(item);
    this.cartStore.addToCart(item);
  }

  removeProductOfCart(id: number): void {
    this.cartApi.deleteToCart(id);
    this.cartStore.removeFromCart(id);
  }

  clearCart() {
    this.cartApi.clearCart();
    this.cartStore.clearCart();
  }

  incrementQuantity = (cartItem : CartItemModel):void => {
    this.cartStore.incrementQuantity(cartItem);
  }

  decrementQuantity = (cartItem : CartItemModel):void => {
    this.cartStore.decrementQuantity(cartItem);
  }

  cart(){
    console.log("blabla");
    return this.cartStore.cart();
  }

  total(){
    return this.cartStore.totalPrice();
  }

  count(){
    return this.cartStore.count();
  }
}
