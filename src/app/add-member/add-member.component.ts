import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  
  memberForm !: FormGroup;
  actionBtn : string = "Register";

  constructor(private formBuilder : FormBuilder, 
    private api : ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<AddMemberComponent>) { }

  ngOnInit(): void {
    this.memberForm = this.formBuilder.group({
      name : ['',Validators.required],
      address : ['',Validators.required],
      phoneNumber : ['',Validators.required],
      rolesDate : ['',Validators.required],
      // image : ['',Validators.nullValidator],
    });
    if(this.editData){
      this.actionBtn = "Update";
      this.memberForm.controls['name'].setValue(this.editData.name);
      this.memberForm.controls['address'].setValue(this.editData.address);
      this.memberForm.controls['phoneNumber'].setValue(this.editData.phoneNumber);
      this.memberForm.controls['rolesDate'].setValue(this.editData.rolesDate);
      // this.memberForm.controls['image'].setValue(this.editData.image);
    }
    // console.log(this.editData);
  }

  register(){
    if(!this.editData){
      if(this.memberForm.valid){
      this.api.addMember(this.memberForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Member added successfully");
          this.memberForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("An error occured while adding member")
        }
      })
      }
    }else{
      this.updateMember()
    }
    // console.log(this.memberForm.value)
  }

  updateMember(){
    this.api.putMember(this.memberForm.value,this.editData.id)
    .subscribe({
        next:(res)=>{
          alert("Member info updated successfully");
          this.memberForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("An error occured while updating member info")
        }
      })
  }
  

}
