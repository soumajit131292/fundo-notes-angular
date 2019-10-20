import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LabelService {

  private token : string;
  constructor(private http : HttpClient) { }
  private apiUrl=environment.base_url;
  

  getLabels() {
  
    this.token=localStorage.getItem('loginToken');
    return this.http.get(this.apiUrl+'label/getlabels/'+this.token)
  }

  createLabel(formValue : any)
  {
    console.log(formValue);
return this.http.post(this.apiUrl+'label/createlabel',formValue,{headers : new HttpHeaders().set('token',localStorage.getItem('loginToken'))});
  }

  updateLabel(labelForm : any,labelId : any)
  {
    console.log(labelForm.labelName);
    return this.http.put(this.apiUrl+'label/updatebylabelid/'+labelId,labelForm,{headers : new HttpHeaders().set('token',localStorage.getItem('loginToken'))});
  }

  deletLabel(label : any)
  {
    console.log(label.id);
    return this.http.delete(this.apiUrl+'label/delete/'+label.id,{headers : new HttpHeaders().set('token',localStorage.getItem('loginToken'))});
  }

  addLabelOnNote(labelId : any,noteId : any ){
    
    return this.http.put(this.apiUrl+'label/update/'+labelId+'/'+noteId,{headers : new HttpHeaders().set('token',localStorage.getItem('loginToken'))});
    
  }
}
