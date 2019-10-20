import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private router: Router) { }
  private apiurl = environment.base_url;
  registerUser(user: any) {
    return this.http.post(this.apiurl + 'user/register', user/*, this.httpOptions*/);
  }
  forgotPassword(emailId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(this.apiurl + 'user/forgotpassword',{'email': emailId},httpOptions);
    //return this.http.post(this.apiurl+'user/forgotpassword',{
//params : new HttpParams().set('email':emailId)   
//headers: new HttpHeaders({'Content-Type':  'application/json'})
   // })
   /*for get request we must use params*/
  
  }

}
