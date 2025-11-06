import {Component, computed, inject} from '@angular/core';
import {CartFacade} from '../../../services/cart.facade';

@Component({
  selector: 'app-cart-page-aside',
  imports: [],
  templateUrl: './cart-page-aside.html',
  styleUrl: './cart-page-aside.scss'
})
export class CartPageAside {
  private cartFacade = inject(CartFacade);
  VAT : number = 0.2;

  totalOfArticles = computed(() => this.cartFacade.total() / (1+this.VAT));

  deliveryCost = 4.00 / (1 + this.VAT);

  VATCost(){
    return ((this.totalOfArticles() + this.deliveryCost) * this.VAT);
  }

  totalOfOrder(){
    return this.totalOfArticles() + this.deliveryCost + this.VATCost();
  }
}
