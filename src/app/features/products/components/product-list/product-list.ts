// product-list.ts
import {Component, computed, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import {Product} from '../../../../models/product.model';
import {ProductFilter} from '../product-filter/product-filter';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard, ProductFilter],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductList implements OnInit {
  products = signal<Product[]>([]);
  cartItems: Product[] = [];
  favoriteIds: number[] = [];

  categoryProducts = signal("");

  ngOnInit(): void {
    this.loadProducts();
  }
  filteredProducts = computed<Product[]>(()=>{
    const category = this.categoryProducts();
    const products = this.products();
    if(!category) return products;
    return products.filter(product => product.category === category);
    }
  )

  onFilteredProducts(category: string): void {
    this.categoryProducts.set(category);
  }

  onProductAddedToCart(product: Product): void {
    this.cartItems.push(product);
    console.log(`${product.name} ajouté au panier !`);
    console.log(`Panier: ${this.cartItems.length} articles`);
  }

  onProductAddedToFavorites(product:Product): void {
    this.favoriteIds.push(product.id);
    console.log(`${product.name} ajouté aux favoris !`);
  }

  onProductRemovedFromFavorites(product: Product): void {
    this.favoriteIds = this.favoriteIds.filter(id => id !== product.id);
    console.log(`${product.name} retiré des favoris !`);
  }

  onNotationAdded(event: {productId: number; rating:number; comment:string}): void {
    const reviewNotation:number[] = [];
    console.log(`Nouvelle note ${event.rating} !`);
    const product = this.products().find(p =>p.id === event.productId);
    console.log(product?.rating);
    console.log(event.rating);
    console.log(reviewNotation);
    if(!product) return;

    reviewNotation.push(event.rating);
    reviewNotation.push(product.rating);
    console.log(reviewNotation);

    const total = product.rating + event.rating;
    const average = total / reviewNotation.length;
    console.log(`total : ${total}`);
    product.rating = parseFloat(average.toFixed(1));

    console.log(`Nouvelle note ajoutée pour ${product.name} : ${event.rating}/5 - Nouvelle moyenne : ${product.rating}/5`)
  }

  isInFavorites(productId: number):boolean{
    return this.favoriteIds.includes(productId);
  }

  getCartCount(): number {
    return this.cartItems.length;
  }

  getFavoritesCount(): number {
    return this.favoriteIds.length;
  }

  private loadProducts(): void {
    this.products.set( [
      {
        id: 1,
        name: 'The Witcher 3: Wild Hunt',
        description: 'Jeu de rôle en monde ouvert dans un univers fantasy sombre',
        price: 39.99,
        imageUrl: 'https://placehold.co/300x200/8B0000/ffffff?text=Witcher',
        category: 'gaming',
        inStock: true,
        rating: 4.9
      },
      {
        id: 2,
        name: 'Nike Air Max 270',
        description: 'Baskets de running avec technologie Air Max visible',
        price: 149.99,
        imageUrl: 'https://placehold.co/300x200/FF6347/ffffff?text=Nike',
        category: 'clothing',
        inStock: true,
        rating: 4.5
      },
      {
        id: 3,
        name: 'Cuisinart Coffee Maker',
        description: 'Cafetière programmable 12 tasses avec carafe en verre',
        price: 89.99,
        imageUrl: 'https://placehold.co/300x200/4682B4/ffffff?text=Coffee',
        category: 'home',
        inStock: false,
        rating: 4.2
      },
      {
        id: 4,
        name: 'Canon EOS R50',
        description: 'Appareil photo hybride 24MP avec objectif kit 18-45mm',
        price: 679.99,
        imageUrl: 'https://placehold.co/300x200/2F4F4F/ffffff?text=Canon',
        category: 'electronics',
        inStock: true,
        rating: 4.7
      },
      {
        id: 5,
        name: 'Yoga Mat Premium',
        description: 'Tapis de yoga antidérapant 6mm épaisseur, écologique',
        price: 45.50,
        imageUrl: 'https://placehold.co/300x200/9370DB/ffffff?text=Yoga',
        category: 'sports',
        inStock: false,
        rating: 4.3
      }
    ]);
  }

  getTotalProducts(): number {
    return this.products().length;
  }

  getInStockCount(): number {
    return this.products().filter(p => p.inStock).length;
  }
}
