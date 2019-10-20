import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgotpasswordComponent } from './component/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './component/resetpassword/resetpassword.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { NoteComponent } from './component/note/note.component';
import { LabelComponent } from './component/label/label.component';
import { AddlabeldialogComponent } from './component/addlabeldialog/addlabeldialog.component';
import { NotefooterComponent } from './component/notefooter/notefooter.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { TrashComponent } from './component/trash/trash.component';



const routes: Routes = [

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword/:token', component: ResetpasswordComponent },
  { path: 'dashboard', component: DashboardComponent,
children:[
  
  { path: '', component: NoteComponent },
  { path:'archieve',component: ArchiveComponent},
  { path:'trash',component: TrashComponent},


] },
{ path: 'label',component: LabelComponent},
{ path: 'addlabelonnote', component: AddlabeldialogComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
