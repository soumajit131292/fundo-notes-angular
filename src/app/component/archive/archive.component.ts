import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NoteService } from 'src/app/service/note.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialognoteComponent } from '../dialognote/dialognote.component';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  

private usernote : [];


constructor(private noteService: NoteService,
  private dialog: MatDialog,
  private router: Router,
  private cdr:ChangeDetectorRef
  ) {
 
}
ngOnInit() {
  this.getArchiveNotes();
}



getArchiveNotes()
  {
    this.noteService.getArchiveNote().subscribe(data=>{
       this.usernote=data;
       
    })
  }

  receiveMessage($event)
  {
    this.getArchiveNotes();
  }

deletNote(notes: any) {

  console.log(notes.value);
  this.noteService.deletNote(notes).subscribe(
    (data) => {
     
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

handleEvent(event: any)
{
  this.ngOnInit();
}

}
