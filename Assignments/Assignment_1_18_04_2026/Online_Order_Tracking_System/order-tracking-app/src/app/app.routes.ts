import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'orders',
    loadComponent: () => import('./orders.component').then((m) => m.OrdersComponent)
  },
  {
    path: 'orders/:id',
    loadComponent: () => import('./order-detail.component').then((m) => m.OrderDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
