import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Login } from '../login';
import { AuthenticationService } from '../auth/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  isSuccessfull = false;
  isLoginFailed = false;
  errorMessage = "";
  loginObj: Login;
  
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ){
    this.loginObj = new Login();
  }

  onLogin() {
      this.authService.login(this.loginObj).subscribe(
        (response) =>{
          if(response.returnCode === 0){    // Check if the returnCode is 0 (indicating success)
            this.isSuccessfull = true;
            this.isLoginFailed = false
            this.router.navigateByUrl('/categories/all');
          }
          else{
            this.isSuccessfull = false;
            this.isLoginFailed = true;
            this.errorMessage = response.message || 'wrong username or password';
          }
        }
      );
  }

}