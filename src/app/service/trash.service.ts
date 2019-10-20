import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrashService {

  constructor(private http: HttpClient) { }
  private apiurl = environment.base_url;

  getNotes(): Observable<any>
  {
    return this.http.get(this.apiurl + 'notes/getrashnotes',{headers:new HttpHeaders().set('token',localStorage.getItem('loginToken'))});
  }
  deletNote(noteId : any)
 {
  console.log(noteId);
  return this.http.delete(this.apiurl+'notes/deletenote/'+noteId,{headers:new HttpHeaders().set('token',localStorage.getItem('loginToken'))})
 }

 restoreNote(noteId : any)
 {
  console.log(noteId);
  return this.http.put(this.apiurl + 'notes/trash/'+noteId,null,{headers:new HttpHeaders().set('token',localStorage.getItem('loginToken'))});
 }
}
