import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Register } from '../register';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from '../auth/authentication.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, HttpClientModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  
  isSuccessfull = false;
  isSignUpFailed = false;
  errorMessage = "";
  registerObj: Register;
  passwordsMatch: boolean = true;


  constructor(
    private authService: AuthenticationService,
    private router: Router
  ){
    this.registerObj = new Register();
  }

  OnSubmit(): void{
    this.checkPasswordsMatch();  // Check passwords before submission
    if(this.passwordsMatch){
      this.authService.registerUser(this.registerObj).subscribe(
        (response: any) =>{
          if(response.returnCode === 0){   // Check if the returnCode is 0 (indicating success)
            this.isSuccessfull = true;
            this.isSignUpFailed = false;
            this.router.navigate(["/account/login"]);
          }
          else{
            this.isSuccessfull = false;
            this.isSignUpFailed = true;
            this.errorMessage = response.message || 'An error occurred. check credentials and try again';
          }
        }
      );
    }
    else{
      this.errorMessage = "Passwords do not match";
    }
  }

  checkPasswordsMatch(): void{
    this.passwordsMatch = (this.registerObj.password === this.registerObj.password_repeat);
  }
}