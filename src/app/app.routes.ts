import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadComponent: () => import('./views/dashboard/dashboard.component').then(c => c.DashboardComponent),
  },
];
