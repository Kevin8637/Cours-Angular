import {CategoryOfProduct} from './product.model';

export type CreateProduct = {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: CategoryOfProduct;
  rating: number;
}
