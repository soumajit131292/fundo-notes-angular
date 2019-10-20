import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  private resetPasswordForm : FormGroup
  constructor() { }

  ngOnInit() {
    this.resetPasswordForm=new FormGroup({
       'newPassword': new FormControl('null',[Validators.required]),
       'confirmPassword': new FormControl('null',[Validators.required])

    });

  }
  onSubmit() {
console.log(this.resetPasswordForm.value);
  }

  


}
