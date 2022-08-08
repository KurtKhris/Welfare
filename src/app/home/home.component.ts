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
      usernameOrEmail : ['',Validators.required],
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
    this.api.getAdmin(this.signInForm.value).subscribe({
      next:(res)=>{
        console.log(res);
        if(res.status == 200){
          this.router.navigate(['/dashboard']);
        }
        else{
          alert("Invalid credentials");
        }
      }
    })
    // this.api.getAdmin(this.signInForm.value).subscribe({
    //   next: (data) => {
    //     console.log(data);
    //     this.router.navigate(['/dashboard']);
    //     if(data.length > 0){
    //       if(data[0].usernameOrEmail == this.signInForm.value.usernameOrEmail && data[0].password == this.signInForm.value.password){
            
            
    //       }else{
    //       alert("Invalid username or password");
    //     }
    //     }
    //   }
    // })
  }


}
