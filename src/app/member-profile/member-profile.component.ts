import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent implements OnInit {

  constructor(private api : ApiService, private http : HttpClient) { }

  ngOnInit(): void {
  //  this.http.get('http://localhost:3000/members/1').subscribe(res=>{
  //     console.log('res', res)
  //  })
  
  }

}
