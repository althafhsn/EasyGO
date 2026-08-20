import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Search } from '../../services/search';


@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  @Input() cartCount: number = 0;
  searchQuery = '';

  constructor(private searchService: Search) {}

  onSearch() {
    this.searchService.setSearchTerm(this.searchQuery);
  }
}
