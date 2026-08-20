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
  @Input() inStock: boolean = true;

  // Send event up to the parent
  @Output() addToCart = new EventEmitter<{ name: string; qty: number }>();

  // qty comes straight from the #qtyInput element in the template
  notifyAddToCart(qty: string) {
    this.addToCart.emit({
      name: this.productName,
      qty: Number(qty) || 1,
    });
  }
}
