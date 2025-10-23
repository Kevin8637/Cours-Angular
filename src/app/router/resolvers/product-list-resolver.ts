import { ResolveFn } from '@angular/router';
import {Product} from '../../features/products/services/models/product.model';

export const productListResolver: ResolveFn<Product[]> = () => {
  const productsList: Product[] = [];
  return productsList;
};
