import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

import { MOCK_ACCOUNT } from '../mocks/accounts.mock';
import { MOCK_TRANSACTIONS } from '../mocks/transactions.mock';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  getAccount() {
    return of(MOCK_ACCOUNT).pipe(delay(500));
  }

  getTransactions() {
    return of(MOCK_TRANSACTIONS).pipe(delay(500));
  }

  withdraw(amount: number) {
    // mock response từ server
    return of({
      success: true,
      amount
    }).pipe(delay(500));
  }
}