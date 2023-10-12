import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth-services/auth.service';
import { ConfirmPasswordValidator } from 'src/validators/confirm-password.validator';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";

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
    private spinner: NgxSpinnerService){}


   ngOnInit(){
     this.myForm();
   }


myForm(){
  this.validateForm = this.fb.group({
    email:["",Validators.required],
    password:["",Validators.required],
  });
 }



  login(){
    this.isFormSubmitted = true;
    if (this.validateForm.valid){
      // do login proccess
    }
  }


}
