import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  adminSignup(data:any){
    // return this.http.post<any>("http://localhost:3000/admin/", data);
    return this.http.post<any>("https://pent-welfare.herokuapp.com/api/auth/signup/", data);
  }

  getAdmin(data:any){
    // return this.http.get<any>("http://localhost:3000/admin/");
    return this.http.post<any>("https://pent-welfare.herokuapp.com/api/auth/signin", data);
  }

  getMemberContribution(){
    return this.http.get<any>("http://localhost:3000/contribution");
  }

  getSpecialContribution(){
    return this.http.get<any>("http://localhost:3000/specialcontribution");
  }

  addMember(data : any){
    // return this.http.post<any>("http://localhost:3000/members/",data);
    return this.http.post<any>("https://pent-welfare.herokuapp.com/api/v1/member/",data);
  }

  getMembers(){
    return this.http.get<any>("https://pent-welfare.herokuapp.com/api/v1/member/");
  }

  getMember(id:number){
    return this.http.get<any>("http://localhost:3000/members/"+id);
  }

  putMember(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/members/" +id, data);
  }

  deleteMember(id:number){
    return this.http.delete<any>("http://localhost:3000/members/" +id);
  }
}
