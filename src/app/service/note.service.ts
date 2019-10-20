import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private token: string;
  constructor(private http: HttpClient) { }
  private apiurl = environment.base_url;

  // eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJJZCI6MX0.dL6z9dPcxpXnrQgKN_3b8yRKVuaNGMC2-0o9W3SMY7oPGTizuoKkPp2MHJbCQ3Uv5S4IDfDpmhHbodVRU_mh5g
  retrieveNotes(): Observable<any> {
    this.token = localStorage.getItem('loginToken');
    return this.http.get(this.apiurl + 'notes/getnotes/' + this.token);
  }
  saveNote(note: any) {
    
    return this.http.post(this.apiurl + 'notes/createnote',note,{headers:new HttpHeaders().set('token',localStorage.getItem('loginToken'))});
 }
 updateNote(note : any,id : any)
 {
  console.log(id);
  console.log(note);
   return this.http.put(this.apiurl+'notes/updatenote/'+id,note,{headers:new HttpHeaders().set('token',localStorage.getItem('loginToken'))})
 }
 deletNote(notes : any)
 {
  console.log(notes);
  return this.http.delete(this.apiurl+'notes/deletenote/'+notes.id,{headers:new HttpHeaders().set('token',localStorage.getItem('loginToken'))})
 }
 doArchiveNote(noteId : any)
 {
  
  console.log(noteId);
  return this.http.put(this.apiurl+'notes/archive/'+noteId,null,{headers:new HttpHeaders().set('token',localStorage.getItem('loginToken'))})
 }
 getArchiveNote(): Observable<any>
 {
  return this.http.get(this.apiurl + 'notes/getarchivenotes',{headers:new HttpHeaders().set('token',localStorage.getItem('loginToken'))});
 }

 doUnArchiveNote(noteId : any)
 {
  console.log(noteId);
  return this.http.put(this.apiurl+'notes/archive/'+noteId,null,{headers:new HttpHeaders().set('token',localStorage.getItem('loginToken'))})
 }

 toThrashNote(noteId : any){
  console.log(noteId);
  return this.http.put(this.apiurl + 'notes/trash/'+noteId,null,{headers:new HttpHeaders().set('token',localStorage.getItem('loginToken'))});
 }
 

}