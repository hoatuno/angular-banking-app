import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Account } from '../models/account';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);

  private baseUrl = 'http://localhost:3000';

  /** GET /accounts */
  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.baseUrl}/accounts`);
  }

  /**
   * GET /transactions?accountId=1
   */
  getTransactions(accountId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.baseUrl}/transactions`, {
      params: { accountId },
    });
  }
  deposit(accountId: string, amount: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/accounts/${accountId}/deposit`, { amount });
  }

  withdraw(accountId: string, amount: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/accounts/${accountId}/withdraw`, { amount });
  }
}
