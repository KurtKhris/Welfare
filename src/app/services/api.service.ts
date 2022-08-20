import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      "Access-Control-Allow-Origin": "*",

    } ),responseType: 'text' as 'json'
  };

  public login(usernameOrEmail: string, password: string){
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(usernameOrEmail + ':' + password)});
    return this.http.get("https://pent-welfare.herokuapp.com/api/auth/signin", {headers, responseType: 'text' as 'json'});
  }


  public getAllMembers(){
    let usernameOrEmail = localStorage.getItem('usernameOrEmail');
    let password = localStorage.getItem('password');
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(usernameOrEmail + ':' + password)});
    return this.http.get<any>("https://pent-welfare.herokuapp.com/api/v1/member/", {headers});
  }

  adminSignup(data:any): Observable<any>{
    // return this.http.post<any>("http://localhost:3000/admin/", data);
    return this.http.post("https://pent-welfare.herokuapp.com/api/auth/signup", data,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

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

  getAdmin(data:any): Observable<any>{
    // return this.http.get<any>("http://localhost:3000/admin/");
    return this.http.post<any>("https://pent-welfare.herokuapp.com/api/auth/signin", data,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getMemberContribution(){
    return this.http.get<any>("http://localhost:3000/contribution");
  }

  getSpecialContribution(){
    return this.http.get<any>("http://localhost:3000/specialcontribution");
  }

  addMember(data : any){
    // return this.http.post<any>("http://localhost:3000/members/",data);
    return this.http.post("https://pent-welfare.herokuapp.com/api/v1/member/",data,this.httpOptions);
  }

  getMembers(){
    return this.http.get<any>("https://pent-welfare.herokuapp.com/api/v1/member/");
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
