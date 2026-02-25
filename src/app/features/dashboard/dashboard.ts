import { Component, inject, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { AccountService } from '../../core/services/account';
import { TransactionService } from '../../core/services/transaction';
import { TransactionListComponent } from '../transactions/transaction-list/transaction-list';
import { UiButtonComponent } from '../../shared/components/ui-button/ui-button';

@Component({
  selector: 'app-dashboard',
  imports: [
    DecimalPipe,
    UiButtonComponent,
    TransactionListComponent
  ],
  templateUrl: './dashboard.html'
})
export class DashboardComponent implements OnInit {

  accountService = inject(AccountService);
  transactionService = inject(TransactionService);

  account = this.accountService.account;

  ngOnInit() {
    this.accountService.load();
    this.transactionService.load();
  }

  addMoney() {
    this.accountService.deposit(1000000);
  }
  withdrawMoney() {
    this.accountService.withdraw(1000000);
  }

}