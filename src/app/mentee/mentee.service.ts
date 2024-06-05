import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { CreateSession } from './send-request/create-session';

@Injectable({
  providedIn: 'root'
})
export class MenteeService {

  API_URL = "http://localhost:8080/api/v1/";

  constructor(
    private http: HttpClient
  ) {}
  

  sendRequest(request: CreateSession): Observable<any>{
    return this.http.post(this.API_URL, request).pipe(
      catchError(error => {
        return error.errorMessage;
      })
    );
  }

  
  
}
