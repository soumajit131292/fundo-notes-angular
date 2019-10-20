import { Component, OnInit, ɵConsole } from '@angular/core';
import { TrashService } from 'src/app/service/trash.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  private trashnote: [];
  constructor(private trashService: TrashService) { }

  ngOnInit() {
    this.getTrashNotes();
  }
  getTrashNotes() {
    this.trashService.getNotes().subscribe(
      (data) => {
        this.trashnote = data
      }
    );
  }
  deleteNote(note: any) {
    console.log(note);
    this.trashService.deletNote(note.id).subscribe(
      (data) => {
        this.getTrashNotes();
        console.log(data)
      }
    );
  }
  restoreNote(note: any) {
    this.trashService.restoreNote(note.id).subscribe(
      (data) => {
        this.getTrashNotes();
        console.log(data)
      }
    );
  }
}
