import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hide = true;
  today: number = Date.now();
  signInForm !: FormGroup;
  name ="";
  constructor(private dialog : MatDialog, private formBuilder : FormBuilder, private router : Router, private api : ApiService) { }

  openDialog(){
    this.dialog.open(SignUpComponent, {
      width:'30%'
    });
  }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      username : ['',Validators.required],
      password : ['',Validators.required],
    })

    
  }

  login(){
    this.api.getAdmin().subscribe({
      next: (data) => {
        if(data.length > 0){
          if(data[0].username == this.signInForm.value.username && data[0].password == this.signInForm.value.password){
            // this.name = data.username;
            console.log(this.signInForm.value.username);
            this.router.navigate(['/dashboard']);
          }else{
          alert("Invalid username or password");
        }
        }
      }
    })
  }


}
