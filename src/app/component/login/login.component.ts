import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  

    constructor(private loginService: LoginService,
    private router: Router) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      'password': new FormControl(null,Validators.required),
      'email': new FormControl(null, Validators.email),
    });
  }
  onSubmit() {
    if(this.loginForm.invalid)
    {
     return this.router.navigate(['/login']);
    }
    console.log(this.loginForm.value);
    this.loginService.onLgin(this.loginForm.value)
      .subscribe((response: any) => {
        obsrve: { response }
        localStorage.setItem('loginToken', response.token);
        console.log(localStorage.getItem('loginToken'));
        this.router.navigate(['/dashboard']);
      });
  }

}
