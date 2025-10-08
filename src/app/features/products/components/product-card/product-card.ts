import {Component, input} from '@angular/core';
import {Product} from '../../../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  product = input.required<Product>()

  onAddToCart(): void {
    console.log(`${this.product().name} ajouté au panier !`)
  }

  onToggleFavorite(): void {
    console.log(`${this.product().name} ajouté aux favoris !`)
  }
}
