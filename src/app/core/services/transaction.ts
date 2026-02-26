import { Injectable, signal, inject } from '@angular/core';
import { Transaction } from '../models/transaction';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private api = inject(ApiService);

  private _transactions = signal<Transaction[]>([]);

  transactions = this._transactions.asReadonly();

  load(accountId: string) {
    this.api.getTransactions(accountId).subscribe((list) => {
      this._transactions.set(list);
    });
  }

  add(tx: Transaction) {
    this._transactions.update((list) => [tx, ...list]);
  }
}
