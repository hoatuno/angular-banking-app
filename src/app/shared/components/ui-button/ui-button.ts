import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-button',
  standalone: true,
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css'
})
export class UiButtonComponent {

  @Input() label: string = '';

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    this.clicked.emit();
  }

}