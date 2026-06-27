import { Route, Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'create-account',
    loadComponent: () => import('../components/create-account/create-account').then(m => m.CreateAccount),
  },
  {
    path: 'otp-verification',
    loadComponent: () => import('../components/otp-verification/otp-verification').then(m => m.OtpVerification),
  }
]