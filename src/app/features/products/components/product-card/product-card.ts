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
    discount = 0.1;
    features = ['Ecran Retina', "M1 Pro", "16 Go RAM"];

    getDiscountPrice() {
      return this.price * (1 - this.discount);
    }

    onBuyClick() {
      if(this.inStock) {
        console.log(`${this.title} ajouté au panier !`);
      }
    }
}
