import { Component } from '@angular/core';
import ProductList from '../../products/components/product-list/product-list';
import {Product} from '../../../models/product.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product.page',
  imports: [
    ProductList
  ],
  template: `
    <app-product-list></app-product-list>
  `,
  styles: ``
})
export default class ProductPage {
  products: Product[] = [];

  constructor(private route:ActivatedRoute) {
    this.products = this.route.snapshot.data['products'];
    console.log(this.products);
  }
}
