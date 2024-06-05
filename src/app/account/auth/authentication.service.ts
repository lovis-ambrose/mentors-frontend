import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../register';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Login } from '../login';
import { Profile } from '../user/profile';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ) { }

  API_URL = "http://localhost:8080/api/v1/";
  userDetails: any;
  private isAuthenticated = false;

  registerUser(user: Register): Observable<any>{
    return this.http.post(this.API_URL, user).pipe(
      catchError(error =>{
        return (error.errorMessage);
      })
    );
  }

  login(credentials: Login): Observable<any> {
    return this.http.post<any>(`${this.API_URL}`, credentials).pipe(
      tap(response => {
        if (response.returnCode === 0 && response.returnObject.token) {
          this.isAuthenticated = true;
          this.userDetails = response.returnObject.user; // Store user details
          // console.log(this.userDetails)
          this.storeToken(response.returnObject.token); // Store token in local storage
        }
      }),
      catchError(error => {
        return throwError(error.errorMessage || "Login failed");
      })
    );
  }

  getUserDetails(): any {
    console.log(this.userDetails);
    return this.userDetails;
  }
  

  logout(): Observable<any> {
    localStorage.removeItem('token'); // Clear token from local storage
    this.isAuthenticated = false;
    return this.http.post<any>(`${this.API_URL}`, {});
  }


  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  storeToken(token: string): void {
    localStorage.setItem('token', token); // Store token in local storage
  }

  getToken(): string | null {
    return localStorage.getItem('token'); // Retrieve token from local storage
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  //check is user is mentor
  isAdmin(): boolean{
    return this.userDetails && this.userDetails.roleCode === 'ADMINISTRATOR';
  }
}
