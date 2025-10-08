import {Component, computed, effect, input, output} from '@angular/core';
import {Product} from '../../../../models/product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  product = input.required<Product>()

  displayPrice = computed(() => {
    const p = this.product();
    return p.inStock ? `${p.price}€` : `Prix indisponible`;
  })

  constructor() {
    effect(() => {
      console.log("Nouveau produit reçu :", this.product().name);
    })
  }

  onAddToCart(): void {
    console.log(`${this.product().name} ajouté au panier !`)
  }

  onToggleFavorite(): void {
    console.log(`${this.product().name} ajouté aux favoris !`)
  }
}
