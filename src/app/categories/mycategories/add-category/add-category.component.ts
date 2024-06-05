import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../category/category';
import { GeneralService } from '../../../services/general.service';
import { Router } from '@angular/router';
import { AddCategory } from './add-category';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent {

  categoryObj: AddCategory;
  isSuccessfull = false;
  isSignUpFailed = false;
  errorMessage: string = "";

  constructor(
    private service: GeneralService,
    private router: Router
  ){
    this.categoryObj = new AddCategory();
  }


  addCategory(){
    this.service.addCategory(this.categoryObj).subscribe(
      (response: any) =>{
        if(response.returnCode ===0){
          this.isSuccessfull = true;
          this.isSignUpFailed = false;
          this.errorMessage = "";
          this.categoryObj.name = "";
          this.categoryObj.description = "";
          this.router.navigateByUrl("/categories/all");
        }
        else{
          this.isSuccessfull = false;
          this.isSignUpFailed = true;
          this.errorMessage = response.message || 'Failed to create category';
        }
      }
    )
  }

}
