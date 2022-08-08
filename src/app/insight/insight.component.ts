import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css']
})
export class InsightComponent implements OnInit {

  countTotalMembers = 0;
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    // this.api.getMembers().subscribe(data => {
    //   this.countTotalMembers = data.length;
    //   console.log(this.countTotalMembers);
    // });

  }

}
