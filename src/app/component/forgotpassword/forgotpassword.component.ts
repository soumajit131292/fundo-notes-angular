import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  private forgotPassword: FormGroup

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.forgotPassword = new FormGroup({
      'email': new FormControl('null', [Validators.email, Validators.required]),
    });
  }
  onSubmit() {
    console.log(this.forgotPassword.value.email),
    this.userService.forgotPassword(this.forgotPassword.value.email).subscribe((data: any) => {
      observe: { data };
      console.log(data);

    })
  }

}
