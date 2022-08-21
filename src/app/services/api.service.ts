import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  usernameOrEmail = "" ;
  password = "";


  constructor(private http : HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
    } ),responseType: 'text' as 'json'

  };

  httpsOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",
      Authorization: 'Basic ' + btoa(this.usernameOrEmail + ':' + this.password),
    } ),responseType: 'text' as 'json'

  };

  errorHandler(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  }


  adminSignup(data:any): Observable<any>{
    return this.http.post("https://pent-welfare.herokuapp.com/api/auth/signup", data,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  adminSignin(data:any): Observable<any>{
    return this.http.post<any>("https://pent-welfare.herokuapp.com/api/auth/signin", data,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  addMember(data : any){
      return this.http.post("https://pent-welfare.herokuapp.com/api/v1/member/",data,this.httpOptions);
    }

  getMembers(){
    return this.http.get<any>("https://pent-welfare.herokuapp.com/api/v1/member/");
  }

  getMemberContribution(){
    return this.http.get<any>("http://localhost:3000/contribution");
  }

  getSpecialContribution(){
    return this.http.get<any>("http://localhost:3000/specialcontribution");
  }

  

  

  getMember(id:number){
    return this.http.get<any>("http://localhost:3000/members/"+id);
  }

  putMember(data:any, id:number){
    return this.http.put<any>("http://localhost:3000/members/" +id, data,this.httpOptions);
  }

  deleteMember(id:number){
    return this.http.delete<any>("http://localhost:3000/members/" +id);
  }
}
