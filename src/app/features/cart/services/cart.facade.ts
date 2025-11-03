import {inject, Injectable} from '@angular/core';
import {CartApi} from './cart.api';
import {CartStore} from './cart.store';
import {Product} from '../../products/services/models/product.model';
import {CartRules} from '../domain/cart.rules';

@Injectable({
  providedIn: 'root'
})
export class CartFacade {
  private cartApi = inject(CartApi);
  private cartStore = inject(CartStore);

  // async addProductOfCart(productData: Product): Promise<Product>{
  //   CartRules.validateAdd(productData, 5000);
  //
  //   const product = await this.cartApi.addProduct(productData);
  //
  //   this.cartStore.addToCart(product);
  //
  //   return product;
  // }

  async updateCart(product: Product) {
  }

  async removeProductOfCart(product: Product) {
  }

  async clearCart(product: Product) {
  }
}
