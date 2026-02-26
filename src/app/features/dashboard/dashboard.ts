import { Component, effect, inject } from '@angular/core';
import { AccountStore } from '../../domains/account/account.store';
import { UiButtonComponent } from '../../shared/components/ui-button/ui-button';
import { TransactionListComponent } from '../transactions/transaction-list/transaction-list';
import { DecimalPipe } from '@angular/common';

@Component({
  standalone: true,
  templateUrl: './dashboard.html',
  imports: [UiButtonComponent, TransactionListComponent, DecimalPipe],
})
export class DashboardComponent {
  store = inject(AccountStore);
}
