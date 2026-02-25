import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout';

export const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    children: [

      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },

      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/dashboard/dashboard')
            .then(m => m.DashboardComponent)
      },

      {
        path: 'transactions',
        loadComponent: () =>
          import('./features/transactions/transactions-page/transactions-page')
            .then(m => m.TransactionsPageComponent)
      },

      {
        path: 'profile',
        loadComponent: () =>
          import('./features/profile/profile-page/profile-page')
            .then(m => m.ProfilePageComponent)
      }

    ]
  }

];