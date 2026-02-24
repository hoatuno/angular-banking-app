import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard';
import { TransactionsComponent } from './features/transactions/transactions';
import { ProfileComponent } from './features/profile/profile';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'transactions', component: TransactionsComponent },
    { path: 'profile', component: ProfileComponent },
];