import { Component, effect, inject } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { TransactionStore } from '../../../domains/transaction/transaction.store';

@Component({
  selector: 'app-transaction-list',
  imports: [DecimalPipe],
  templateUrl: './transaction-list.html',
})
export class TransactionListComponent {
  store = inject(TransactionStore);
  constructor() {
    effect(() => {
      console.log(this.store.transactions());
    });
  }
}
