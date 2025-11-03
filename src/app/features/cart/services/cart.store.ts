import {computed, Injectable, signal} from '@angular/core';
import {Product} from '../../products/services/models/product.model';
import {CartItemModel} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private cartSignal = signal<CartItemModel[]>([]);

   cart = computed(() => this.cartSignal());

  totalPrice = computed(() =>
    this.cart().reduce((total, item) => total + (item.product.price * item.quantity), 0)
  );

  count = computed(() =>
    this.cart().length
  );

  addToCart = (product: Product) => {
    this.cartSignal.update(items => {
      if (items.some(item => item.product.id === product.id)) {
        items.map(item => item.product.id === product.id ?
          item.quantity = item.quantity + 1
          : item
        )
      } else {
        items = [...items, {product, quantity: 1}]
      }
      return items
    });
  }

  removeFromCart(id: number) {
    this.cartSignal.update(items => items.filter(item => item.product.id !== id));
  }

  clearCart():void {
    this.cartSignal.set([]);
  }

  incrementQuantity = (CartItem: CartItemModel) => {
    this.cartSignal.update(item => item.map(item => item.product.id === CartItem.product.id ? {
      ...item,
      quantity: item.quantity + 1
    } : item))
  }

  decrementQuantity = (CartItem: CartItemModel) => {
    this.cartSignal.update(item => item.map(item => item.product.id === CartItem.product.id ? {
      ...item,
      quantity: item.quantity - 1
    } : item))
  }
}
