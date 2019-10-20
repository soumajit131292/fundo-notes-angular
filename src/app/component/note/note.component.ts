import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialognoteComponent } from '../dialognote/dialognote.component';
import { Router } from '@angular/router';
import { AddlabeldialogComponent } from '../addlabeldialog/addlabeldialog.component';
import { LabelService } from 'src/app/service/label.service';
import { Label } from 'src/app/model/label';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  
  private popup = false;
  
  private usernote: [];
  private noteForm: FormGroup;
  
  
  constructor(private noteService: NoteService,
    private dialog: MatDialog,
    private router: Router,
    ) {
    this.getNotes();
  }
  ngOnInit() {
    this.noteForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
    
  }
  onClickForExpand() {
    this.popup = true;
  }
  getNotes() {
    this.noteService.retrieveNotes()
      .subscribe(
        (data) => {
          this.usernote = data
          console.log(this.usernote)
        }
      );
  }
  onSubmit() {
    if (this.noteForm.invalid)
      return this.popup = false;
    this.popup = false;
    console.log(this.noteForm.value);
    this.noteService.saveNote(this.noteForm.value).subscribe(
      (data) => {
        this.getNotes();
        console.log(data)
      }
    );
  }


  deletNote(notes: any) {

    console.log(notes.value);
    this.noteService.deletNote(notes).subscribe(
      (data) => {
        this.getNotes();
        console.log(data)
      }
    );
  }

  openDialogNote(notes: any) {
    const dialogRef = this.dialog.open(DialognoteComponent, {
      width: '450px',
      data: notes
    });
  }
  eventHandler(eventData : any){
this.getNotes();
  }  

}
