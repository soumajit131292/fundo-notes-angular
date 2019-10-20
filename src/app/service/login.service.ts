import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
constructor(private http: HttpClient){}
  private apiUrl=environment.base_url;
  onLgin(login : any) {
return this.http.post(this.apiUrl+'user/login',login);
  }

}
