import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { HttpErrorResponse } from '@angular/common/http';
import { StorageService } from 'src/app/services/storage-services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isFormSubmitted:boolean = false;
  validateForm: FormGroup;


  constructor(private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router){}


   ngOnInit(){
     this.myForm();
   }


myForm(){
  this.validateForm = this.fb.group({
    email:["",Validators.required],
    password:["",Validators.required],
  });
 }



  signin(){
    this.isFormSubmitted = true;
    if (this.validateForm.valid){
      this.authService.login(this.validateForm.value).subscribe({
        next: res =>{
          console.log(res)
          this.spinner.show();
          this.toastr.success("Success", "You're Login Successfully", {timeOut: 4000})
          setTimeout(() => {
            this.spinner.hide();
          }, 3000);
          this.validateForm.reset();
          if(res.userId != null){
             const user = {
              id: res.userId,
              role: res.userRole
             }
             console.log(user);
             StorageService.saveToken(res.jwt);
             StorageService.saveUser(user);

             if(StorageService.isAdminLoggedIn()){
                this.router.navigateByUrl("/admin/dashboard");
             }
             else if(StorageService.isCustomerLoggedIn()){
                this.router.navigateByUrl("/customer/dashboard");
             }


          }else{
            this.toastr.error('Invalid username or password', 'wrong credentials', {timeOut: 4000});
          }

        },
        error:(err:HttpErrorResponse) =>{
          console.log(err)
          this.toastr.error('Invalid username or password', 'wrong credentials', {timeOut: 4000});
          this.validateForm.reset();
        }
      })
    }
  }


}
