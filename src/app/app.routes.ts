import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('../app/features/auth/login/login').then(m => m.Login),
  },
  {
    path: 'signup',
    loadComponent: () => import('../app/features/auth/signup/signup').then(m => m.Signup),
  }
];
