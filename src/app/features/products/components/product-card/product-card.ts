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

  productAddedToCart = output<Product>();
  productAddedToFavorites = output<Product>();
  productRemovedFromFavorites = output<Product>();

  isFavorite = input<boolean>(false);

  onAddToCart(): void {
    this.productAddedToCart.emit(this.product());
  }

  onToggleFavorite(): void {
    if(this.isFavorite()) {
      this.productRemovedFromFavorites.emit(this.product());
    } else {
      this.productAddedToFavorites.emit(this.product());
    }
  }
}
