import { Injectable, signal } from '@angular/core';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private _transactions = signal<Transaction[]>([
    {
      id: '1',
      title: 'Salary',
      amount: 15000000,
      date: '2026-02-24',
      type: 'credit'
    },
    {
      id: '2',
      title: 'Coffee',
      amount: -50000,
      date: '2026-02-24',
      type: 'debit'
    },
    {
      id: '3',
      title: 'Rent',
      amount: -4000000,
      date: '2026-02-23',
      type: 'debit'
    }
  ]);

  transactions = this._transactions.asReadonly();

}