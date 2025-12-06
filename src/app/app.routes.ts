import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./onboarding/pages/home-page/home-page').then((c) => c.HomePage),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
