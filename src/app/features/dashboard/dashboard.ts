import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from '../../shared/components/ui-button/ui-button';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, UiButtonComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  balance = 0;

  transactions = [
    { id: 1, description: 'Coffee', amount: -50000 },
    { id: 2, description: 'Salary', amount: 15000000 },
    { id: 3, description: 'Shopping', amount: -1200000 }
  ];

  addMoney() {
    this.balance += 1000000;
  }

}