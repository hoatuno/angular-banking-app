import { Injectable, inject, signal, effect } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { ApiService } from '../../core/api/api.service';
import { AccountStore } from '../account/account.store';
import { Transaction } from '../../core/models/transaction';

@Injectable({ providedIn: 'root' })
export class TransactionStore {
  private api = inject(ApiService);
  private accountStore = inject(AccountStore);

  private _transactions = signal<Transaction[]>([]);

  transactions = this._transactions.asReadonly();

  constructor() {
    effect(async () => {
      const account = this.accountStore.account();

      if (!account) return;

      console.log('loading tx for', account.id);

      const tx = await firstValueFrom(this.api.getTransactions(account.id));

      this._transactions.set(tx);
    });
  }
}
