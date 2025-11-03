import {Injectable} from '@angular/core';
import {Product} from '../../products/services/models/product.model';
import {BaseApi} from '../../../shared/services/base.api';

@Injectable({
  providedIn: 'root'
})
export class CartApi{

  getCart(){
    console.log("api get cart")
  }

  addToCart(product: Product){
    console.log("api add item to cart")
  }

  deleteToCart(id: number){
    console.log("api delete item from cart")
  }

  clearCart(){
    console.log("api clear Cart")
  }
}
