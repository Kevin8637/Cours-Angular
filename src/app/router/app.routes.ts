import { Routes } from '@angular/router';
import {ErrorPage} from '../core/pages/error.page';
import {authGuard} from './guards/auth-guard';
import {productListResolver} from './resolvers/product-list-resolver';

export const routes: Routes = [
  { path: '', loadComponent: () => import('../features/home/pages/home.page')},
  { path: 'products', loadComponent: () => import('../features/home/pages/product.page'), resolve: {products: productListResolver}},
  { path: 'products/:id', loadComponent: () => import('../features/home/pages/product-detail.page')},
  { path: "admin", loadComponent:() => import('../features/home/pages/admin.page'), canActivate: [authGuard]},
  { path: "about", loadComponent: () => import('../features/home/pages/about.page')},
  { path: "settings", loadComponent:() => import('../features/home/pages/setting.page')},
  { path: 'error', component: ErrorPage },
  { path: '**', redirectTo: 'error' }
];
