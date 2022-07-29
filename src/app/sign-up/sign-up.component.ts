import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  signUpForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,) { }

  
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name : ['',Validators.required],
      username : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required],
      confirmPassword : ['',Validators.required],
    })
  }

}
