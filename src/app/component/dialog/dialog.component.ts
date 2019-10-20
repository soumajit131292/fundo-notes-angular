import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    private router : Router) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  onLogout() {
  this.dialogRef.close();
 
  console.log(localStorage.getItem('loginToken'));
    localStorage.removeItem('loginToken');
    this.router.navigate(['/login']);
  
}

onNoLogout(){
  this.dialogRef.close();
}
}
