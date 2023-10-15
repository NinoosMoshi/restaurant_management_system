import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage-services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

 isAdminLoggedIn:boolean = StorageService.isAdminLoggedIn();
 isCustomerLoggedIn:boolean = StorageService.isCustomerLoggedIn();


 constructor(private router:Router){}

   ngOnInit(){
      this.router.events.subscribe(event =>{
        if(event.constructor.name === "NavigationEnd"){
          this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
          this.isCustomerLoggedIn = StorageService.isCustomerLoggedIn();
        }
      })
   }


   logout(){
       StorageService.signout();
       this.router.navigateByUrl("/login")
   }



}
