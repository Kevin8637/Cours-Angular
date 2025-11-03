import {computed, Injectable, signal} from '@angular/core';
import {Product} from '../../products/services/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartStore {
  private cartSignal = signal<Product[]>([]);

  cart = computed(() => this.cartSignal());

  totalPrice = computed(() =>
    this.cartSignal().reduce((total, p) => total + p.price, 0)
  );

  addToCart(product: Product) {
    this.cartSignal.update(products => [...products, product])
  }

  removeFromCart(id: number) {
    this.cartSignal.update(products =>{
      const updated = [...products];
      const index = updated.findIndex(p => p.id === id);
      if (index !== 1) updated.splice(index, 1);
      return updated;
    });
  }

  clearCart():void {
    this.cartSignal.set([]);
  }
}
