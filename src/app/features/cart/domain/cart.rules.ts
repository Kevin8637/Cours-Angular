import {Product} from '../../products/services/models/product.model';

export class CartRules {
  static validateAdd(productData: Product, total: number):void{
    if(productData.id == null)throw new Error('Identifiant du produit obligatoire');
    if(productData.price < 0) throw new Error('Le prix doit être suppérieur ou égal à 0');
    if(productData.stock <= 0 ) throw new Error("Aucun produit en stock");
    if(total > 5000) throw new Error('Le montant total du panier doit être inférieur à 5000€')
  }

  static validateRemove(productData: Product):void{
  }

  static validateUpdate(productData: Product):void{
  }

  static validateClear(productData: Product):void{
  }

  static validateCheckout(productData: Product):void{
  }
}
