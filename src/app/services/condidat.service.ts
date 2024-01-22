import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CondidatService {

  constructor(private http:HttpClient) { }

  ajouter(data){
    return this.http.post('http://localhost:9000/stagiaire/add',data)
  }
  modifier(id,ids,data){
    return this.http.put('http://localhost:9000/stagiaire/update/'+id ,data)
  }
}
