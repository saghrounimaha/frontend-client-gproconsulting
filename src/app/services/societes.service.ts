import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocietesService {

  constructor(private http:HttpClient) { }

  ajouterr(idS,data){
    return this.http.post('http://localhost:9000/societe/add/'+idS,data)
  }
  modifier(id,ids,data){
    return this.http.put(environment.baseUrl+'societe/update/'+id +'/'+ids,data)
  }

  public getall() {

    return this.http.get(environment.baseUrl+'secteur/all');
  }
}
