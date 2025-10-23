import { Injectable } from '@angular/core';
import {BaseApi} from '../../../shared/services/base.api';
import {Product} from './models/product.model';
import {UpdateProduct} from './models/update-product.model';
import {CreateProduct} from './models/create-product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApi extends BaseApi{
  constructor() {
    super('');
  }

  async getProducts(): Promise<Product[]> {
    return this.get<Product[]>('/products.json')
  }

  async getProductById(id:number): Promise<Product | undefined>{
    const products = await this.getProducts();
    return products.find(p => p.id === id);
  }

  // async createProduct(product:CreateProduct): Promise<Product>{
  //   return this.post<Product>('/product.json', product);
  // }
  //
  // async updateProduct(id:string, product: UpdateProduct): Promise<Product>{
  //   return this.put<Product>(`/product.json/${id}`, product);
  // }
  //
  // async deleteProduct(id: string): Promise<void> {
  //   return this.delete<void>(`/product.json/${id}`);
  // }
}
