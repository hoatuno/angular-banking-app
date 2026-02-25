import { Injectable, signal, inject } from '@angular/core';
import { Account } from '../models/account';
import { ApiService } from './api';
import { TransactionService } from './transaction';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private api = inject(ApiService);
  private transactionService = inject(TransactionService);

  private _account = signal<Account | null>(null);

  account = this._account.asReadonly();

  load() {

    this.api.getAccount().subscribe(account => {
      this._account.set(account);
    });

  }

  deposit(amount: number) {

    this._account.update(acc => {
      if (!acc) return acc;

      return {
        ...acc,
        balance: acc.balance + amount
      };
    });

    this.transactionService.add({
      id: crypto.randomUUID(),
      title: 'Deposit',
      amount,
      date: new Date().toISOString(),
      type: 'credit'
    });

  }

  withdraw(amount: number) {

    const acc = this._account();

    if (!acc) return;

    if (acc.balance < amount) {
      alert('Insufficient balance');
      return;
    }

    this.api.withdraw(amount).subscribe(() => {

      // update balance
      this._account.update(acc => {
        if (!acc) return acc;

        return {
          ...acc,
          balance: acc.balance - amount
        };
      });

      // add transaction
      this.transactionService.add({
        id: crypto.randomUUID(),
        title: 'Withdraw',
        amount: -amount,
        date: new Date().toISOString(),
        type: 'debit'
      });

    });

  }

}