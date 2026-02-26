import { Injectable, signal, inject } from '@angular/core';
import { Account } from '../models/account';
import { ApiService } from './api';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private api = inject(ApiService);

  private _account = signal<Account | null>(null);

  account = this._account.asReadonly();

  /** load account */
  load() {
    this.api.getAccount().subscribe((account) => {
      this._account.set(account[0]);
    });
  }

  /** deposit via API */
  deposit(amount: number) {
    const acc = this._account();

    if (!acc) return;

    this.api.deposit(acc.id, amount).subscribe((res: any) => {
      this._account.update((a) =>
        a
          ? {
              ...a,
              balance: res.balance,
            }
          : null,
      );
    });
  }

  /** withdraw via API */
  withdraw(amount: number) {
    const acc = this._account();

    if (!acc) return;

    if (acc.balance < amount) {
      alert('Insufficient balance');
      return;
    }

    this.api.withdraw(acc.id, amount).subscribe((res: any) => {
      this._account.update((a) =>
        a
          ? {
              ...a,
              balance: res.balance,
            }
          : null,
      );
    });
  }
}
