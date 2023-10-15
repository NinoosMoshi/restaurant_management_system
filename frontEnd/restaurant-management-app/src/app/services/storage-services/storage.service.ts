import { Injectable } from '@angular/core';


  const TOKEN = 'token';
  const USER = 'user';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public static saveToken(token:string): void{
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN,token);
  }


  public static saveUser(user:any): void{
    window.localStorage.removeItem(USER);
    window.localStorage.setItem(USER,JSON.stringify(user));
  }


  public static getToken():string{
    return localStorage.getItem(TOKEN);
  }


  public static getUserRole():string{
    const user = this.getUser();
    if(user == null){
      return '';
    }
    return user.role;
  }

  static getUser(): any {
     return JSON.parse(localStorage.getItem(USER));
  }


  public static isAdminLoggedIn():boolean{
    if(this.getToken() === null){
       return false;
    }
    const role:string = this.getUserRole();
    return role == 'ADMIN'
  }



  public static isCustomerLoggedIn():boolean{
    if(this.getToken() === null){
       return false;
    }
    const role:string = this.getUserRole();
    return role == 'CUSTOMER'
  }


  public static signout(){
    window.localStorage.removeItem(USER);
    window.localStorage.removeItem(TOKEN);
  }



}
