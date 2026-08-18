import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductCard } from "./components/product-card/product-card";
import { ProductList } from "./components/product-list/product-list";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [ ProductList, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EasyGO');
  protected readonly cartCount = signal(0);

  onAddToCart() {
    this.cartCount.update((count) => count + 1);
  }
}
