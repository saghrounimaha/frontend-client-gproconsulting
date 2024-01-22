import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CentreService {

  constructor(private http:HttpClient) { }

  ajouter(data){
    return this.http.post('http://localhost:9000/centre/add',data)
  }
  modifier(id,data){
    return this.http.put('http://localhost:9000/centre/update/'+id ,data)
  }

}
