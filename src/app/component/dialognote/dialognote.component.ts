import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-dialognote',
  templateUrl: './dialognote.component.html',
  styleUrls: ['./dialognote.component.scss']
})
export class DialognoteComponent implements OnInit {
private note : any;
private id : any;
@Input()private userNoteForm : FormGroup;
  constructor(public dialogRef: MatDialogRef<DialognoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public noteService : NoteService) { 
      this.note=data;
      
    }
  ngOnInit() {
this.userNoteForm=new FormGroup({
  'title' : new FormControl('',Validators.required),
  'description' : new FormControl('',Validators.required),
})
  }

  onSubmit(){
    this.dialogRef.close();
    this.id=this.note.id;
  
    this.noteService.updateNote(this.userNoteForm.value,this.id).subscribe(
      data => {
console.log(data);
      }
    )
    
  }

}