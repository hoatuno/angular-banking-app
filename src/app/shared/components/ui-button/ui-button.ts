import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonVariant = 'primary' | 'secondary' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ui-button',
  imports: [CommonModule],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css'
})
export class UiButtonComponent {

  @Input() label = '';

  @Input() variant: ButtonVariant = 'primary';

  @Input() size: ButtonSize = 'md';

  @Input() disabled = false;

  @Output() clicked = new EventEmitter<void>();


  handleClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }


  get variantClass() {

    const variants = {

      primary:
        'bg-blue-500 text-white hover:bg-blue-600',

      secondary:
        'bg-gray-200 text-gray-800 hover:bg-gray-300',

      danger:
        'bg-red-500 text-white hover:bg-red-600'

    };

    return variants[this.variant];
  }


  get sizeClass() {

    const sizes = {

      sm: 'px-2 py-1 text-sm',

      md: 'px-4 py-2 text-base',

      lg: 'px-6 py-3 text-lg'

    };

    return sizes[this.size];
  }

}