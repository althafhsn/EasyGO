import { Component, signal } from '@angular/core';
import { ProductList } from "./components/product-list/product-list";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [ProductList, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EasyGO');
  protected readonly cartCount = signal(0);

  // The search text typed in the navbar, passed down to the product list
  protected readonly searchTerm = signal('');

  onSearchChange(term: string) {
    this.searchTerm.set(term);
  }

  onAddToCart(item: { name: string; qty: number }) {
    this.cartCount.update((count) => count + item.qty);
  }
}
