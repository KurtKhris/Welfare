import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  addMember(data : any){
    return this.http.post<any>("http://localhost:3000/members/",data);
  }

  getMembers(){
    return this.http.get<any>("http://localhost:3000/members/");
  }

  getMember(id : number){
    return this.http.get<any>("http://localhost:3000/members/" +id);
  }

  putMember(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/members/" +id, data);
  }

  deleteMember(id:number){
    return this.http.delete<any>("http://localhost:3000/members/" +id);
  }
}
