import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SignUpComponent } from '../sign-up/sign-up.component';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hide = true;
  today: number = Date.now();
  signInForm !: FormGroup;
  constructor(private dialog : MatDialog, private formBuilder : FormBuilder) { }

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


}
