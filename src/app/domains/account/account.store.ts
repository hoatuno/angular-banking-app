import { Injectable, inject, resource, computed } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { ApiService } from '../../core/api/api.service';
import { Account } from '../../core/models/account';
import { TransactionStore } from '../transaction/transaction.store';

@Injectable({ providedIn: 'root' })
export class AccountStore {
  private api = inject(ApiService);

  /** query accounts */
  accountsResource = resource({
    loader: () => firstValueFrom(this.api.getAccounts()),
  });

  /** select account id=1 */
  account = computed<Account | null>(() => {
    const accounts = this.accountsResource.value();
    return accounts?.find((a) => a.id === '1') ?? null;
  });

  /** mutation deposit */
  async deposit(amount: number) {
    const acc = this.account();

    if (!acc) return;

    await firstValueFrom(this.api.deposit(acc.id, amount));

    // ⭐ refetch
    this.accountsResource.reload();
  }

  /** mutation withdraw */
  async withdraw(amount: number) {
    const acc = this.account();

    if (!acc) return;

    await firstValueFrom(this.api.withdraw(acc.id, amount));

    // ⭐ refetch
    this.accountsResource.reload();
  }
}
