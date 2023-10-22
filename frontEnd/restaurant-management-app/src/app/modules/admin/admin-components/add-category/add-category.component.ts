import { Component } from '@angular/core';
import { AdminService } from '../../admin-service/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  isFormSubmitted:boolean = false;
  categoryForm: FormGroup;


  constructor(private adminService:AdminService,
              private fb:FormBuilder){}


  ngOnInit(){
    this.myForm();
  }


  myForm(){
    this.categoryForm = this.fb.group({
      name:[null, Validators.required],
      description:[null, Validators.required],
    });
   }


   postCategory(){
    console.log(this.categoryForm.value);
   }




}
