import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddMemberComponent } from '../add-member/add-member.component';
import { MainNavbarComponent } from '../main-navbar/main-navbar.component';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  openDialog() {
    this.dialog.open(AddMemberComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save' ){
        this.getAllMembers();
      }
    })
  }

  displayedColumns: string[] = ['id', 'fullName', 'address', 'phoneNumber', 'registrationDate', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private api : ApiService, private dialog : MatDialog, private memberInfo : MainNavbarComponent) { }

  ngOnInit(): void {
    this.getAllMembers();
    
  }

  onInfo(){
   return this.memberInfo.onMemberProfile();
  }

  getAllMembers(){
    this.api.getMembers()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        // console.log(res);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  editMember(row : any){
    this.dialog.open(AddMemberComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllMembers();
      }
    })
  }

  deleteMember(id:number){
    this.api.deleteMember(id)
    .subscribe({
      next:(res)=>{
        alert("Member deleted successfully");
        this.getAllMembers();
      },
      error:()=>{
        alert("Error occured while deleting member");
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
