import {CreateProduct} from '../../products/services/models/create-product.model';
import {Product} from '../../products/services/models/product.model';

export class CartRules {
  static validateAdd(productData: Product):void{
    if(productData.id == null)throw new Error('Identifiant du produit obligatoire');
    if(productData.price < 0) throw new Error('Le prix doit être suppérieur ou égal à 0');
  }

  static validateRemove(productData: Product):void{
    if(productData)
  }
}
