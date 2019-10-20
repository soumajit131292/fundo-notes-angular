import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  genders = ['male', 'female']
  signUpForm: FormGroup
  constructor(private userService: UserService,
    private router: Router) {
  }
  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstName': new FormControl(null,Validators.required),
      'lastName': new FormControl(null,Validators.required),
      'password': new FormControl(null,Validators.required),
      'email': new FormControl(null,Validators.email),
      'mobileNumber': new FormControl(null,Validators.required),
    });
  }
  onSubmit() {
    console.log(this.signUpForm.value);
   this.userService.registerUser(this.signUpForm.value)
  .subscribe(
    (response : any )=>
    {
       this.router.navigate(['/login']);
    }
  );
}

}
