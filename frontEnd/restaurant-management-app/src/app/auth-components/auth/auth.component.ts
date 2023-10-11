import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/auth-services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  validateForm: FormGroup;


  constructor(private authService: AuthService,
              private fb: FormBuilder){}


  ngOnInit(){
     this.validateForm = this.fb.group({
       name:["",Validators.required],
       email:["",Validators.required],
       password:["",Validators.required],
       checkPassword:["",Validators.required]
     })
  }


  // register(){
  //   this.authService.signup().subscribe({
  //     next: res =>{

  //     },
  //     error: err =>{

  //     }
  //   })
  // }



}
