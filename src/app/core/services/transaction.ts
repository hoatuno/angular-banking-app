import { Injectable, signal, inject } from '@angular/core';
import { Transaction } from '../models/transaction';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private api = inject(ApiService);

  private _transactions = signal<Transaction[]>([]);

  transactions = this._transactions.asReadonly();

  load() {

    this.api.getTransactions().subscribe(list => {

      this._transactions.set(list);

    });

  }

  add(tx: Transaction) {

    this._transactions.update(list => [
      tx,
      ...list
    ]);

  }

}