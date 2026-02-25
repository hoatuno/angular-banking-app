import { Injectable, signal } from '@angular/core';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private accountSignal = signal<Account>({
    id: '1',
    name: 'Main Account',
    balance: 5000000,
    currency: 'VND'
  });

  account = this.accountSignal.asReadonly();

  deposit(amount: number) {
    this.accountSignal.update(acc => ({
      ...acc,
      balance: acc.balance + amount
    }));
  }

}