import { Component } from '@angular/core';
import { TransactionListComponent } from '../transaction-list/transaction-list';

@Component({
  selector: 'app-transactions-page',
  imports: [TransactionListComponent],
  template: `
    <h1 class="text-2xl font-bold mb-4">
      Transactions
    </h1>

    <app-transaction-list />
  `
})
export class TransactionsPageComponent { }