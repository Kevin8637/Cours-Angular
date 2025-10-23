import {Component, computed, inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import {ProductFilter} from '../product-filter/product-filter';
import {Product} from '../../services/models/product.model';
import {ProductApi} from '../../services/product-api';
import {CartSummary} from '../../../cart/components/cart-summary/cart-summary';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductCard, ProductFilter, CartSummary],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductList implements OnInit {
  private productApi = inject(ProductApi)

  products = signal<Product[]>([]);
  isLoading = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  favoriteIds: number[] = [];

  categoryProducts = signal("");

  async ngOnInit() {
    await this.loadProducts();
  }

  async loadProducts() {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    const products = await this.productApi.getProducts();
    this.products.set(products);
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


  onProductAddedToFavorites(product:Product): void {
    this.favoriteIds.push(product.id);
  }

  onProductRemovedFromFavorites(product: Product): void {
    this.favoriteIds = this.favoriteIds.filter(id => id !== product.id);
  }

  // onNotationAdded(event: {productId: number; rating:number; comment:string}): void {
  //   const reviewNotation:number[] = [];
  //   const product = this.products().find(p =>p.id === event.productId);
  //   if(!product) return;
  //
  //   reviewNotation.push(event.rating);
  //   reviewNotation.push(product.rating);
  //
  //   const total = product.rating + event.rating;
  //   const average = total / reviewNotation.length;
  //   product.rating = parseFloat(average.toFixed(1));
  // }

  isInFavorites(productId: number):boolean{
    return this.favoriteIds.includes(productId);
  }

  getFavoritesCount(): number {
    return this.favoriteIds.length;
  }

  getTotalProducts(): number {
    return this.products().length;
  }

  getInStockCount(): number {
    return this.products().filter(p => p.inStock).length;
  }
}
