import {Component, inject} from '@angular/core';
import {ProductList} from '../../products/components/product-list/product-list';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../products/services/models/product.model';

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
  private route = inject(ActivatedRoute);
  products: Product[] = this.route.snapshot.data['products'];
}
