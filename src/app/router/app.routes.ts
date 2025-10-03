import { Routes } from '@angular/router';
import {HomePage} from '../features/home/pages/home.page';
import {ErrorPage} from '../core/pages/error.page';
import {ProductDetailPage} from '../features/home/pages/product-detail.page';
import {AccountPage} from '../features/home/pages/account.page';
import {ProfilePage} from '../features/home/pages/profile.page';
import {OrdersPage} from '../features/home/pages/orders.page';
import {helloResolver} from './resolvers/hello-resolver';
import {HelloPage} from '../features/home/pages/hello.page';
import {authGuard} from './guards/auth-guard';
import {AdminPage} from '../features/home/pages/admin.page/admin.page';

export const routes: Routes = [
  { path: '', component:HomePage},
  { path: 'products', loadComponent:() => import('../features/products/components/product-list/product-list')},
  { path: 'products/:id', component: ProductDetailPage},
  { path: 'account', component: AccountPage, children: [
      {path : 'profile', component: ProfilePage},
      {path : 'orders', component: OrdersPage}
    ]
  },
  { path: "admin", component: AdminPage, canActivate: [authGuard]},
  { path : 'hello', component : HelloPage, resolve:{message: helloResolver}},
  { path: 'error', component: ErrorPage},
  { path: '**', redirectTo: 'error' }
];
