import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth-services/auth.service';
import { ConfirmPasswordValidator } from 'src/validators/confirm-password.validator';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  isFormSubmitted:boolean = false;
  validateForm: FormGroup;

  // confirmationValidation = (control:FormControl): { [s: string]: boolean} => {
  //    if(!control.value){
  //       return { requird:true };
  //    } else if(control.value != this.validateForm.controls['password'].value){
  //       return { confirm: true, error: true }
  //    }
  //    return {};
  // }


  constructor(private authService: AuthService,
              private fb: FormBuilder){}


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
          if(res.id != null){
            // success message ("SUCCESS", "You're registered successfully")
          }
        },
        error: err =>{

        }
      })
    }

  }







}
