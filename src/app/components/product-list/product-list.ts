import { Component, EventEmitter, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, signal } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { Product } from '../../models/products/product.model';
import { Subscription } from 'rxjs';
import { Search } from '../../services/search';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit, OnChanges, OnDestroy {

  @Output() addToCart = new EventEmitter<string>();


  ngOnChanges(changes: SimpleChanges) {
    console.log('productName changed');
  }


  onAddToCart(productName: string) {
    console.log(`${productName} added`);
    this.addToCart.emit(productName);
  }

  products: Product[] = [
    { id: 1, name: 'Galaxy S26 Ultra', price: 1200, imageUrl: 'https://mobile2000.com/cdn/shop/files/886b499224fc5a83d4cca532841ca4aa.png?v=1774445414&width=1780' },
    { id: 2, name: 'Galaxy S26', price: 799, imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/us/s2602/gallery/us-galaxy-s26-s947-sm-s947uzsexaa-550994863?$product-details-jpg$' },
    { id: 3, name: 'Galaxy S26 Plus', price: 999, imageUrl: 'https://get4lessghana.com/wp-content/uploads/2026/02/s26.png' },
    { id: 4, name: 'Galaxy S25 Ultra', price: 1000, imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/us/2501/gallery/us-galaxy-s25-s938-sm-s938uzsaxaa-544888025?$product-details-jpg$' },
    { id: 5, name: 'iPhone 17 Pro Max', price: 1200, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Ng3mmLavN5sA45canHOkOnxl-kjfhAfhh099PGnTPT62N94ctRCf_wc&s=10' },
    { id: 6, name: 'iPhone 16 Pro Max', price: 1099, imageUrl: 'https://appleasia.lk/cdn/shop/files/iPhone-16-Pro-Max-Black-Titanium-1.png?v=1780579031' },
    { id: 7, name: 'iPhone 15 Pro Max', price: 899, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_S51kKdw_d94kf3sfTa4pCw2YFTA6z3zZlEynb3C7xA&s=10' },
    { id: 8, name: 'iPhone 14 Pro Max', price: 1000, imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVhsEQ-BT4SLiHAZ1ijCSMjhi6V9wfIirNAwEO6tOwdA&s=10' },
  ];

  filteredProducts = signal<Product[]>([...this.products]);

  private subscription!: Subscription;

  constructor(private searchService: Search) { }

  ngOnInit() {
    this.subscription = this.searchService.searchTerm$.subscribe((term) => {
      this.filteredProducts.set(
        this.products.filter((product) =>
          product.name.toLowerCase().includes(term.toLowerCase())
        )
      );
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
