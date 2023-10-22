import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage-services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  BASE_URL = "http://localhost:8080/api/admin";

  constructor(private http:HttpClient) { }


  public postCategory(categoryDto:any):Observable<any>{
      return this.http.post<[]>(`${this.BASE_URL}/category`, categoryDto,
      {
        headers:this.createAuthorizationHeader()
      });
  }


  createAuthorizationHeader(): HttpHeaders{
     let authHeaders:HttpHeaders = new HttpHeaders();
     return authHeaders.set(
      "Authorization", "Bearer " + StorageService.getToken()
     )
  }



}
