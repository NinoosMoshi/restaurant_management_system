import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth-services/auth.service';
import { ConfirmPasswordValidator } from 'src/validators/confirm-password.validator';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isFormSubmitted:boolean = false;
  validateForm: FormGroup;


  constructor(private authService: AuthService,
              private fb: FormBuilder,
              private toastr: ToastrService,
              private spinner: NgxSpinnerService){}


  ngOnInit(){
     this.myForm();
  }




   myForm(){
    this.validateForm = this.fb.group({
      name:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      checkPassword:["",[Validators.required]]
    },
    {
      validator: ConfirmPasswordValidator("password", "checkPassword")
    }

    );
   }



  register(){

    this.isFormSubmitted = true;
    if (this.validateForm.valid) {
      console.log(this.validateForm.value)
      this.authService.signup(this.validateForm.value).subscribe({
        next: res =>{
            this.spinner.show();
            this.toastr.success("Success", "You're Register Successfully", {timeOut: 5000})
            setTimeout(() => {
              this.spinner.hide();
            }, 3000);
            this.validateForm.reset();
        },
        error: (err:HttpErrorResponse) =>{
          this.toastr.error('Error', 'There is Some Error', {timeOut: 5000})
        }
      })
    }

  }







}
