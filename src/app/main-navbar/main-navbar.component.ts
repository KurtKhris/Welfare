import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  admin ="";
  opened = true;
  showInsight = true;
  showMembers = false;
  showAddMembers= false;
  showAddContribution= false;
  showMemberProfile= false;
  showMemberContribution= false;
  constructor(private login : HomeComponent) { }

  ngOnInit(): void {
    // this.adminName();
  }

  // adminName(){
  //   console.log(this.login.signInForm.value.username);
  // }
  

  display(){
    this.showInsight=!this.showInsight
  }

  onDashboard(){
    this.showInsight = true;
    this.showAddMembers = false;
    this.showMembers = false;
    this.showAddContribution= false;
    this.showMemberProfile= false;
    this.showMemberContribution= false;
  }

  onMembers(){
    this.showInsight = false;
    this.showAddMembers = false;
    this.showMembers = true;
    this.showAddContribution= false;
    this.showMemberProfile= false;
    this.showMemberContribution= false;
  }

  onAddMembers(){
    this.showInsight = false;
    this.showAddMembers = true;
    this.showMembers = false;
    this.showAddContribution= false;
    this.showMemberProfile= false;
    this.showMemberContribution= false;
  }

  onRecordContribution(){
    this.showInsight = false;
    this.showAddMembers = false;
    this.showMembers = false;
    this.showAddContribution= true;
    this.showMemberProfile= false;
    this.showMemberContribution= false;
  }

  onMemberProfile(){
    this.showInsight = false;
    this.showAddMembers = false;
    this.showMembers = false;
    this.showAddContribution= false;
    this.showMemberProfile= true;
    this.showMemberContribution= false;
  }

  onMemberContribution(){
    this.showInsight = false;
    this.showAddMembers = false;
    this.showMembers = false;
    this.showAddContribution= false;
    this.showMemberProfile= false;
    this.showMemberContribution= true;
  }


}
