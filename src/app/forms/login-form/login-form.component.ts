import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  productForm:any | FormGroup;
  constructor(
    private formBuilder:FormBuilder
  ) {
    this.productFormBuilder();
   }

  ngOnInit(): void {
  }
  productFormBuilder(){
    this.productForm = this.formBuilder.group({
      Name:["",[Validators.required,Validators.minLength(4),Validators.maxLength(40),Validators.pattern(/^[A-Za-z]*$/)]],
      // Email:["",[Validators.required,Validators.email]],
      Password:["",[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
      Image:['']
    })
  }
  submitProductForm(){


  }

}
