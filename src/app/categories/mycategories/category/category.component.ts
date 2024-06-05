import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services/general.service';
import { Category } from './category';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../account/auth/authentication.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  isAdmin: boolean = false;
  showPagination = false;

  currentPage = 1;
  pageSize = 6; // Number of categories/items per page
  displayedCategories: Category[] = [];
  
  



  constructor(
    private service: GeneralService,
    private authService: AuthenticationService,
  ){}


  ngOnInit(): void {
    this.getAllCategories();
    this.isAdmin = this.authService.isAdmin();  //check is user is Admin
  }


  getAllCategories(): void {
    this.service.allCategories().subscribe({
        next: (data: Category[]) => {
            this.categories = data;
            this.updateDisplayedCategories();
            this.showPagination = true;
            console.log(this.categories);
        },
        error: (err) => {
            console.error(err);
        }
    });
  }

  updateDisplayedCategories(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedCategories = this.categories.slice(startIndex, startIndex + this.pageSize);
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedCategories();
    }
  }

  goToNextPage(): void {
    const totalPages = Math.ceil(this.categories.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.updateDisplayedCategories();
    }
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedCategories();
  }

  get pages(): number[] {
    const totalPages = Math.ceil(this.categories.length / this.pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }
  
}
