import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {
  contributionForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.contributionForm = this.formBuilder.group({
      name : ['',Validators.required],
      type : ['',Validators.required],
      amount : ['',Validators.required],
      date : ['',Validators.required],
    })
  }

}
