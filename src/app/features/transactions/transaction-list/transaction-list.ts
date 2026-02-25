import { Component, inject } from '@angular/core';
import { TransactionService } from '../../../core/services/transaction';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-transaction-list',
  imports: [DecimalPipe],
  templateUrl: './transaction-list.html'
})
export class TransactionListComponent {

  transactionService = inject(TransactionService);

  transactions = this.transactionService.transactions;

}