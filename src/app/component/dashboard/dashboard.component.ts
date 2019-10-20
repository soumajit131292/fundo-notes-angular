import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { LabelService } from 'src/app/service/label.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LabelComponent } from '../label/label.component';
import { Label } from 'src/app/model/label';
import { NoteService } from 'src/app/service/note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  private token : string;
  constructor(private userService: UserService, private router: Router,
    private labelService : LabelService,
    public dialog: MatDialog,
    private noteService : NoteService) { 
    }
  private labels : [];
  ngOnInit() {
    this.getLabels();
  }

  openDialog() {
  const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });
  }
     
  getLabels() {
     this.token=localStorage.getItem('loginToken');
    this.labelService.getLabels().subscribe(
      (data: any) => this.labels = data,
      
    );
  }

  openDialogForLabelEdit(labels : Label[])
  {
      const dialogRef=this.dialog.open(LabelComponent,{
        width: '450px',
        data : labels,
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
  }


  
}


