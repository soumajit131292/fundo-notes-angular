import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { NoteComponent } from './component/note/note.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { UserService } from './service/user.service';
import { LabelService } from './service/label.service';
import { LoginService } from './service/login.service';
import { NoteService } from './service/note.service';
import { HttpClientModule } from '@angular/common/http';
import { TextFieldModule } from '@angular/cdk/text-field';
import { DialognoteComponent } from './component/dialognote/dialognote.component';
import { LabelComponent } from './component/label/label.component';
import { AddlabeldialogComponent } from './component/addlabeldialog/addlabeldialog.component';
import { NotefooterComponent } from './component/notefooter/notefooter.component';

import { DisplayComponent } from './component/display/display.component';
import { ArchivefooterComponent } from './component/archivefooter/archivefooter.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component';




@NgModule({
  declarations: [
   
    
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    NoteComponent,
    DialogComponent,
    DialognoteComponent,
    LabelComponent,
    AddlabeldialogComponent,
    NotefooterComponent,
    ArchivefooterComponent,
    DisplayComponent,
    ArchiveComponent,
    TrashComponent,
    
  ],
  imports: [
    MatMenuModule,
    FormsModule,
    TextFieldModule,
    MatDialogModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,

  ],
  entryComponents: [DialogComponent,DialognoteComponent,LabelComponent],

  providers: [ LoginService, LabelService, NoteService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
