import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home.component').then(m => m.HomeComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'profile',
        loadComponent: () => import('./profile.component').then(m => m.ProfileComponent),
      },
    ]
  },
  {
    path: 'calculator',
    loadComponent: () => import('./calculator/calculator.component').then(m=> m.CalculatorComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./not-found.component').then(m => m.NotFoundComponent),
  },
];
