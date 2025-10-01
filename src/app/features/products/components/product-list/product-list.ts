import { Component } from '@angular/core';
import {ProductCard} from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  products = [
    { id: 1, name: 'iPhone 15', price: 999, category: 'electronics', stock: 10 },
    { id: 2, name: 'T-shirt', price: 25, category: 'clothing', stock: 0 },
    { id: 3, name: 'Livre Angular', price: 35, category: 'books', stock: 25 }
  ]
}
