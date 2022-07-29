import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  opened = true;
  showInsight = true;
  showMembers = false;
  showAddMembers= false;
  showAddContribution= false;
  constructor() { }

  ngOnInit(): void {
  }

  display(){
    this.showInsight=!this.showInsight
  }

  onDashboard(){
    this.showInsight = true;
    this.showAddMembers = false;
    this.showMembers = false;
    this.showAddContribution= false;
  }

  onMembers(){
    this.showInsight = false;
    this.showAddMembers = false;
    this.showMembers = true;
    this.showAddContribution= false;
  }

  onAddMembers(){
    this.showInsight = false;
    this.showAddMembers = true;
    this.showMembers = false;
    this.showAddContribution= false;
  }

  onRecordContribution(){
    this.showInsight = false;
    this.showAddMembers = false;
    this.showMembers = false;
    this.showAddContribution= true;
  }

}
