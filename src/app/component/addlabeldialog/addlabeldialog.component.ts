import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LabelService } from 'src/app/service/label.service';
import { Label } from 'src/app/model/label';

@Component({
  selector: 'app-addlabeldialog',
  templateUrl: './addlabeldialog.component.html',
  styleUrls: ['./addlabeldialog.component.scss']
})
export class AddlabeldialogComponent implements OnInit {
token : string
public labels : Label[] = [];
public note : any;
  constructor(public dialogRef: MatDialogRef<AddlabeldialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private labelService : LabelService) { 

      this.dialogRef.addPanelClass('create-dialog');
console.log(this.data);
this.note = data;
    }

  ngOnInit() {
    
    this.getLabels();
  }
  getLabels() {
    this.token=localStorage.getItem('loginToken');
   this.labelService.getLabels().subscribe(
     (data: any) => this.labels = data,
     
   );
 }
}