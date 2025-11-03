import {CreateProduct} from './create-product.model';

export type UpdateProduct = Partial<CreateProduct> & {
  inStock: boolean;
}
