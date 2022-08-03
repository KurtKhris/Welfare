import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  hide = true;
  signUpForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<SignUpComponent>) { }

  
  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name : ['',Validators.required],
      username : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required]
      // confirmPassword : ['',Validators.required]
    });
  }

  signUp(){
      if(this.signUpForm.valid){
          this.api.adminSignup(this.signUpForm.value)
          .subscribe({
            next:(res)=>{
              alert("Admin added successfully");
              console.log(res);
              this.signUpForm.reset();
              this.dialogRef.close();
            },
            error:()=>{
              alert("An error occured while adding admin")
            }
          })
      }
  }
}
