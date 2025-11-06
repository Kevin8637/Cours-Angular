import {Component, output, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-product-filter',
  imports: [],
  templateUrl: './product-filter.html',
  styleUrl: './product-filter.scss'
})
export class ProductFilter {
  products = signal("");
  categoryProductsFiltered = output<string>()

  clothingCategory():void {
    this.products.set("Mode");
    this.onFilter();
  }

  gamingCategory():void {
    this.products.set("High-Tech");
    this.onFilter();
  }

  homeCategory():void {
    this.products.set("Maison");
    this.onFilter();
  }

  resetCategory():void {
    this.products.set("");
    this.onFilter();
  }

  onFilter():void{
    this.categoryProductsFiltered.emit(this.products());
  }
}
