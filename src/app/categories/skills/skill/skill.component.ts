import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../services/general.service';
import { Skill } from './skill';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../../account/auth/authentication.service';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent implements OnInit{

  skills: Skill[] = [];
  isAdmin: boolean = false;

  showPagination = false;

  currentPage = 1;
  pageSize = 6; // Number of categories/items per page
  displayedSkills: Skill[] = [];

  constructor(
    private service: GeneralService,
    private authService: AuthenticationService
  ){}


  ngOnInit(): void {
    this.getAllSkills();
    this.isAdmin = this.authService.isAdmin();  //check is user is Admin
  }



  getAllSkills(){
    this.service.getAllSkills().subscribe({
      next: (data: Skill[]) => {
        this.skills = data;
        this.updateDisplayedSkills();
        this.showPagination = true;
        console.log(this.skills);
    },
    error: (err) => {
        console.error(err);
    }
    })
  }


  updateDisplayedSkills(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    this.displayedSkills = this.skills.slice(startIndex, startIndex + this.pageSize);
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedSkills();
    }
  }

  goToNextPage(): void {
    const totalPages = Math.ceil(this.skills.length / this.pageSize);
    if (this.currentPage < totalPages) {
      this.currentPage++;
      this.updateDisplayedSkills();
    }
  }

  setCurrentPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedSkills();
  }

  get pages(): number[] {
    const totalPages = Math.ceil(this.skills.length / this.pageSize);
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

}
