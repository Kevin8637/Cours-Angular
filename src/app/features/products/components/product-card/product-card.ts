import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
    title = 'MackBook Pro';
    price = 2299;
    inStock = true;

    onBuyClick() {
      if(this.inStock) {
        console.log(`${this.title} ajouté au panier !`);
      }
    }
}
