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
