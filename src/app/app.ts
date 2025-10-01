import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductCard} from './features/products/components/product-card/product-card';
import {Footer} from './core/components/footer/footer';
import {Header} from './core/components/header/header';
import {ProductList} from './features/products/components/product-list/product-list';
import {ImageGalery} from './features/products/components/image-galery/image-galery';
import {Counter} from './features/products/components/counter/counter';
import {SearchForm} from './features/products/components/search-form/search-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductCard, Footer, Header, ProductList, ImageGalery, Counter, SearchForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('E-shop');
}
