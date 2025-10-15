import {Component, computed, effect, input, output} from '@angular/core';
import {Product} from '../../../../models/product.model';
import {ProductNotationForm} from '../product-notation-form/product-notation-form';

@Component({
  selector: 'app-product-card',
  imports: [
    ProductNotationForm
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})

export class ProductCard {
  product = input.required<Product>();
  isFavorite = input<boolean>(false);
  reviewAdded = output<{productId: number, rating: number, comment: string}>();
  productAddedToCart = output<Product>();
  productAddedToFavorites = output<Product>();
  productRemovedFromFavorites = output<Product>();

  showRatingForm:boolean = false;

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
    this.productAddedToCart.emit(this.product());
  }

  onToggleFavorite(): void {
    if(this.isFavorite()) {
      this.productRemovedFromFavorites.emit(this.product());
    } else {
      this.productAddedToFavorites.emit(this.product());
    }
  }

  onActivateRatingForm(): void {
    this.showRatingForm = true;
  }

  onDeactivateRatingForm(): void {
    this.showRatingForm = false;
  }

  onSubmitRating(event : {rating: number, comment: string}):void {
    this.showRatingForm = false;
    this.reviewAdded.emit({
      productId: this.product().id,
      rating: event.rating,
      comment: event.comment
    })
  }
}
