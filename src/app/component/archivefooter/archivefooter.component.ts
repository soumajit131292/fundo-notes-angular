import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Label } from 'src/app/model/label';
import { LabelService } from 'src/app/service/label.service';
import { NoteService } from 'src/app/service/note.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-archivefooter',
  templateUrl: './archivefooter.component.html',
  styleUrls: ['./archivefooter.component.scss']
})
export class ArchivefooterComponent implements OnInit {

  @Input() private note: any;
  @Output() notify : EventEmitter<any> =new EventEmitter<any>();
  public labels: [];
  public archieveNote: [];
  public selectedNote: any;
  private selectedLabel: Label;
  
  constructor(private labelService: LabelService,
    private noteService: NoteService,
    private router: Router
    )  { }

  ngOnInit() {   
    this.getLabels();
    this.getArchiveNotes();
  }
  archiveNote(note: any) {

    this.noteService.doArchiveNote(note.id).subscribe(data => {

    })
  }


  getArchiveNotes()
  {
    this.noteService.getArchiveNote().subscribe(data=>{
       this.archieveNote=data;
       
    })
  }




  getLabels() {
    this.labelService.getLabels().subscribe((data: any) => {
      this.labels = data
    });
  }
  labelClicked(label: Label, note: any) {

    this.selectedLabel = label;
    this.selectedNote = note;
    console.log(this.selectedNote);
    console.log(this.selectedLabel);
  }

  unArchiveNote(note : any){
    this.noteService.doUnArchiveNote(note.id).subscribe(data => {
      this.ngOnInit();

this.sendMessage();
    })
    
  }

  sendMessage() {
    this.notify.emit(this.selectedNote);
  }

}


