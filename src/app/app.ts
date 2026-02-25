import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  template: `<router-outlet />`
})
export class App {
  protected readonly title = signal('angular-banking-app');
}
