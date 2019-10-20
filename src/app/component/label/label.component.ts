import { Component, OnInit, Inject, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { LabelService } from 'src/app/service/label.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Label } from 'src/app/model/label';

@Component({
  // changeDetection : ChangeDetectionStrategy.OnPush,
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  
  token: string;
  labelId: any;
  labels: Label[]=[];

 private labelForm : FormGroup
  
  constructor(public dialogRef: MatDialogRef<LabelComponent>,
    @Inject(MAT_DIALOG_DATA) private  data: Label[],

    private labelService: LabelService,
    private router: Router) {


      this.dialogRef.addPanelClass('create-dialog');
console.log(this.data);
this.labels = data;

  }

  ngOnInit() {
    
    this.labelForm = new FormGroup({
      labelName: new FormControl('', Validators.required),
    })
  }
  

  onSubmit() {
    if (this.labelForm.invalid)
      return this.dialogRef.close();
      console.log(this.labelForm.value);
    this.dialogRef.close();
    this.labelService.createLabel(this.labelForm.value).subscribe(
      data => {
        console.log(data);
      }
    )
  }
  onUpdate(label: any) {
// if(label.labelName ==='')
// return this.dialogRef.close();
    this.labelId = label.id;
    console.log(this.labelId);
    console.log(label.labelName);
    this.labelService.updateLabel(label, this.labelId).subscribe(data => {
      console.log(data)
      this.dialogRef.close();
    })
   }
   onDelet(label : any)
   {
     console.log(label.labelName);
    this.labelService.deletLabel(label).subscribe(data => {
      this.dialogRef.close();
    })
   }
}