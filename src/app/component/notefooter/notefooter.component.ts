import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LabelService } from 'src/app/service/label.service';
import { Label } from 'src/app/model/label';
import { NoteService } from 'src/app/service/note.service';
import { Router } from '@angular/router';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
  selector: 'app-notefooter',
  templateUrl: './notefooter.component.html',
  styleUrls: ['./notefooter.component.scss']
})
export class NotefooterComponent implements OnInit {
  @Input() private note: any;
  @Output() messageEvent : EventEmitter<any> =new EventEmitter<any>();
  public labels: [];
  public selectedNote: any;
  private selectedLabel: Label;
  private labelForm: FormGroup;
  constructor(private labelService: LabelService,
    private noteService: NoteService,
    private router: Router) { }

  ngOnInit() {

    this.labelForm = new FormGroup({
      'labelName': new FormControl('', Validators.required),
    })
    this.getLabels();
  }
  archiveNote(note: any) {

    this.noteService.doArchiveNote(note.id).subscribe(data => {
      this.eventHandler();
    })
  }






  getLabels() {
    this.labelService.getLabels().subscribe((data: any) => {
      this.labels = data
    });
  }
  labelClicked(label: Label, note: any) {
    //console.log(event),

    this.selectedLabel = label;
    this.selectedNote = note;
    console.log(this.selectedNote);
    console.log(this.selectedLabel);
    this.labelService.addLabelOnNote(this.selectedLabel.id ,this.selectedNote.id ).subscribe(data=>{

     console.log(data);
    });

  }
  toThrashNote(note : any)
  {
this.noteService.toThrashNote(note.id).subscribe(data=>{
console.log(note.id)
this.eventHandler();
})
  }
eventHandler()
{
  this.messageEvent.emit(this.labels);
}


}
//(mouseenter)="addLabel($event,note)"
