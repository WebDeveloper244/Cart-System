import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

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
      Email:["",[Validators.required,Validators.email]]
    })
  }


  submitProductForm(){
    console.log(this.productForm.value);
    
  }

}
