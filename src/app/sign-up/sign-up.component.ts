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

  constructor(private formBuilder : FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<SignUpComponent>) {
    this.save()
  }


  ngOnInit(): void {

  }
  save(){
    this.signUpForm = this.formBuilder.group({
      name : ['', Validators.required],
      username : ['',Validators.required],
      email : ['',Validators.required],
      password : ['',Validators.required]
      // confirmPassword : ['',Validators.required]
    });
  }

  signUp(){
    // console.log(this.signUpForm.value)
         if(this.signUpForm.valid){
          this.api.adminSignup(this.signUpForm.value)
          .subscribe({
            next:(res)=>{
              console.log(res);
              if(res.status == 200){
                console.log("Admin added successfully");
                this.signUpForm.reset();
                this.dialogRef.close('save');
              }
            }
          })
         }
  }
}
