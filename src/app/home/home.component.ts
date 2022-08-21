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
  hours : any;
  greetings: any;
  today: any = Date.now();
  signInForm !: FormGroup;
  name ="";
  image : any;
  constructor(private dialog : MatDialog, private formBuilder : FormBuilder, private router : Router, private api : ApiService) { 
    this.save();
  }

  openDialog(){
    this.dialog.open(SignUpComponent, {
      width:'30%'
    });
  }

  ngOnInit(): void {
    setInterval(() => {
    this.today = Date.now();
  }, 1000);

  this.hours = new Date().getHours();

  if(this.hours < 12){
    this.greetings = "Good morning";
    this.image = "../../assets/img/morning.png";
  }
  else if(this.hours >= 12 && this.hours < 18){
    this.greetings = "Good afternoon";
    this.image = "../../assets/img/afternoon.png";
  }
  else if(this.hours >= 18 && this.hours < 24){
    this.greetings = "Good evening";
    this.image = "../../assets/img/evening.png";
  }

}

save(){
  this.signInForm = this.formBuilder.group({
      usernameOrEmail : ['',Validators.required],
      password : ['',Validators.required],
    })
}

  login(){
         if(this.signInForm.valid){
          this.api.adminSignin(this.signInForm.value)
          .subscribe({
            next:(res)=>{
              console.log(res);
              alert("Login Successful")
              this.router.navigate(['/dashboard']);
            },
            error:()=>{
              alert("Login Unsuccessful")
            }
          })
         }
  }

  // dologin(){
  //   console.log(this.signInForm.value);
  // }


}
