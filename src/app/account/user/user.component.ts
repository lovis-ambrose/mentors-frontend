import { Component, Input, OnInit } from '@angular/core';
import { Profile } from './profile';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // isSuccessfull = false;
  // isLogOutFailed = false;
  // errorMessage = "";
  userDetails: any;
  

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ){}


  ngOnInit(): void {
    this.userDetails = this.authService.getUserDetails();
  }


  logOut(): void {
    this.authService.logout().subscribe(
      () => {
        console.log(this.userDetails);
        this.router.navigateByUrl('/home');
      },
      (error) => {
        console.error('Logout failed:', error);
      }
    );
  }

  goHome() {
    this.router.navigateByUrl("/categories/all");
    }

}
