import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  private baseUrl = 'http://localhost:3000';

  /** GET /accounts */
  getAccount() {
    return this.http.get<Account[]>(`${this.baseUrl}/accounts`);
  }

  /** GET /transactions */
  getTransactions(accountId: string) {
    return this.http.get<Transaction[]>(`${this.baseUrl}/transactions`, {
      params: {
        accountId,
      },
    });
  }

  /** POST withdraw */
  withdraw(accountId: string, amount: number) {
    return this.http.post(`${this.baseUrl}/accounts/${accountId}/withdraw`, { amount });
  }

  /** POST deposit */
  deposit(accountId: string, amount: number) {
    return this.http.post(`${this.baseUrl}/accounts/${accountId}/deposit`, { amount });
  }
}
