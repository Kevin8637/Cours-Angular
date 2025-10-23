import {Component, computed, effect, inject, input, output} from '@angular/core';
import {Product} from '../../services/models/product.model';
import {CartStore} from '../../../cart/services/cart.store';


@Component({
  selector: 'app-product-card',
  imports: [
  ],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})

export class ProductCard {
  cartStore = inject(CartStore);

  product = input.required<Product>();
  isFavorite = input<boolean>(false);
  // reviewAdded = output<{productId: number, rating: number, comment: string}>();
  productAddedToFavorites = output<Product>();
  productRemovedFromFavorites = output<Product>();

  // showRatingForm:boolean = false;

  constructor() {
    effect(() => {
      console.log("Nouveau produit reçu :", this.product().name);
    })
  }

  onAddToCart(): void {
    const newProduct: Product = {
      id : this.product().id,
      name : this.product().name,
      description: this.product().description,
      price : this.product().price,
      imageUrl : this.product().imageUrl,
      category : this.product().category,
      inStock : this.product().inStock,
      rating : this.product().rating
    }
    this.cartStore.addToCart(newProduct);
    console.log(newProduct);
  }

  onToggleFavorite(): void {
    if(this.isFavorite()) {
      this.productRemovedFromFavorites.emit(this.product());
    } else {
      this.productAddedToFavorites.emit(this.product());
    }
  }

  // onActivateRatingForm(): void {
  //   this.showRatingForm = true;
  // }
  //
  // onDeactivateRatingForm(): void {
  //   this.showRatingForm = false;
  // }
  //
  // onSubmitRating(event : { rating: number, comment: string}):void {
  //   this.showRatingForm = false;
  //   this.reviewAdded.emit({
  //     productId: this.product().id,
  //     rating: event.rating,
  //     comment: event.comment
  //   })
  // }
}
