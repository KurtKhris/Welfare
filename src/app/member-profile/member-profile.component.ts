import { HttpClient } from '@angular/common/http';
import { Component, OnInit,  } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { ContributionComponent } from '../contribution/contribution.component';
import { MainNavbarComponent } from '../main-navbar/main-navbar.component';
@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {
  id = "";
  name = "";
  address = "";
  phone = "";
  registrationDate = "";
  openAddContribution(){
    this.dialog.open(ContributionComponent,{
      width:'30%'
    })
  }


  constructor(private api : ApiService, private http : HttpClient, private dialog : MatDialog, private memberContribution: MainNavbarComponent) { }

  ngOnInit(): void {
    this.getAMember();
    
  }

   onViewContribution(){
    return this.memberContribution.onMemberContribution();
  }

  getAMember(){
    this.api.getMember(1)
    .subscribe({
      next:(res)=>{
        this.id = res.id;
        this.name = res.fullName;
        this.address = res.address;
        this.phone = res.phoneNumber;
        this.registrationDate = res.registrationDate;
        // console.log(this.id);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
