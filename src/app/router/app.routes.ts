import { Routes } from '@angular/router';
import {ErrorPage} from '../core/pages/error.page';
import {authGuard} from './guards/auth-guard';
import {productListResolver} from './resolvers/product-list-resolver';
import {userResolver} from './resolvers/user-resolver';

export const routes: Routes = [
  { path: '', loadComponent: () => import('../features/home/pages/home.page')},
  { path: 'products', loadComponent: () => import('../features/home/pages/product.page'), resolve: {products: productListResolver}},
  { path: 'products/:id', loadComponent: () => import('../features/home/pages/product-detail.page')},
  { path: 'users', loadComponent: () => import('../features/user/pages/user-page'), resolve:{users: userResolver}},
  { path: "admin", loadComponent:() => import('../features/home/pages/admin.page'), canActivate: [authGuard]},
  { path: "about", loadComponent: () => import('../features/home/pages/about.page')},
  { path: "bean", loadComponent:() => import('../features/home/pages/bean-page')},
  { path: "auth", loadComponent: () => import('../features/auth/pages/auth.page'),
  children: [
    {path: "register", loadComponent: () => import('../features/auth/pages/register.page')},
    {path: "login", loadComponent: () => import('../features/auth/pages/login.page')},
  ]},
  { path: "settings", loadComponent:() => import('../features/home/pages/setting.page')},
  { path: 'error', component: ErrorPage },
  { path: '**', redirectTo: 'error' }
];
