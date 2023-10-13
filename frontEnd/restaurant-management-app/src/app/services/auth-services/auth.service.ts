import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = "http://localhost:8080/api/auth";



  constructor(private http:HttpClient) { }


  public signup(signupRequest:any):Observable<any>{
     return this.http.post<any>(`${this.BASE_URL}/signup`, signupRequest);
  }



  public login(loginRequest:any):Observable<any>{
     return this.http.post<any>(`${this.BASE_URL}/login`,loginRequest);
  }



}
