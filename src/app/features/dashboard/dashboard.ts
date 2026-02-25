import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountService } from '../../core/services/account';
import { UiButtonComponent } from '../../shared/components/ui-button/ui-button';
import { TransactionListComponent } from '../transactions/transaction-list/transaction-list';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, UiButtonComponent, TransactionListComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  accountService = inject(AccountService);

  account = this.accountService.account;

  addMoney() {
    this.accountService.deposit(1000000);
  }

}