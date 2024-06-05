import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Category } from '../categories/mycategories/category/category';
import { Skill } from '../categories/skills/skill/skill';
import { AddCategory } from '../categories/mycategories/add-category/add-category';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  API_URL = "http://localhost:8080/api/v1/";

  constructor(
    private http: HttpClient
  ) { }

  // Skills
  addSkill(skill: Skill):Observable<any>{
    return this.http.post(this.API_URL, skill).pipe(
      catchError(error =>{
        return error.errorMessage;
      })
    )
  }


  getAllSkills(): Observable<Skill[]>{
    const payload = {
      SERVICE: "Skill",
      ACTION: "allSkills"
    };
    return this.http.post<any>(`${this.API_URL}`, payload).pipe(
      map(response => response.returnObject),
      catchError(error => {
        console.error("API error:", error);
        throw("Failed to fetch skills. Please try again later.");
      })
    )
  }



  // Categories
  addCategory(category: AddCategory): Observable<any>{
    return this.http.post(this.API_URL, category).pipe(
      catchError( error =>{
        return error.errorMessage;
      })
    )
  }

  allCategories(): Observable<Category[]> {
    const payload = {
      SERVICE: "Category",
      ACTION: "getAllCategories"
    };
    return this.http.post<any>(`${this.API_URL}`, payload).pipe(
      map(response => response.returnObject),
      catchError(error => {
        console.error("API error:", error);
         throw("Failed to fetch categories. Please try again later.");
      })
    );
  }


  // Mentors
  getAllMentors(){
    const payload = {
      SERVICE: "Mentors",
      ACTION: "myMentors"
    };
    return this.http.post<any>(`${this.API_URL}`, payload).pipe(
      map(response => response.returnObject),
      catchError(error => {
        console.error("API error:", error);
        throw("Failed to fetch mentors. Please try again later.");
      })
    );
  }


}
