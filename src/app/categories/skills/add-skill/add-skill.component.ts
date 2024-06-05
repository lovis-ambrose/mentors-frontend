import { Component } from '@angular/core';
import { Skill } from './skill';
import { GeneralService } from '../../../services/general.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-skill',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-skill.component.html',
  styleUrl: './add-skill.component.css'
})
export class AddSkillComponent {
  skillObj: Skill;
  isSuccessfull = false;
  isSignUpFailed = false;
  errorMessage: string = "";

  constructor(
    private service: GeneralService,
    private router: Router
  ){
    this.skillObj = new Skill();
  }


  addSkill(){
    this.service.addCategory(this.skillObj).subscribe(
      (response: any) =>{
        if(response.returnCode ===0){
          this.isSuccessfull = true;
          this.isSignUpFailed = false;
          this.errorMessage = "";
          this.skillObj.name = "";
          this.skillObj.description = "";
          this.router.navigateByUrl("/categories/all");
        }
        else{
          this.isSuccessfull = false;
          this.isSignUpFailed = true;
          this.errorMessage = response.message || 'Failed to create Skill';
        }
      }
    )
  }
}
