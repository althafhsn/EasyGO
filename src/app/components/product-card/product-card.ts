import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})

export class ProductCard {

  @Input() productName: string = '';
  @Input() price: number = 0;
  @Input() imageUrl: string = '';

  // Send event up to the parent
@Output() addToCart =
  new EventEmitter<string>();

notifyAddToCart() {
  this.addToCart.emit(this.productName);
}

}
