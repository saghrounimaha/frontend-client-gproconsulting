import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http:HttpClient) { }

  ajouter(id,data){
    return this.http.post(environment.baseUrl+'formation/add/'+id,data)
  }


    allformation(id){
    return this.http.get(environment.baseUrl+'formation/all/'+id)}


    supprimer(id){
      return this.http.delete(environment.baseUrl+'formation/delete/'+id)}

 getbyid(id){
    return this.http.get(environment.baseUrl+'formation/ById/'+id)
 }

 modifier(id,idc,data){
    return this.http.put(environment.baseUrl+'formation/update/'+id+'/'+idc,data)
 }

 getallformation(){
    return this.http.get(environment.baseUrl+'formation/allf')
 }
 demandeformation(data,idf,ids){
    return this.http.post(environment.baseUrl+'demander/add/'+idf+'/'+ids,data)
 }
  alldemandeformation(id){
    return this.http.get(environment.baseUrl+'demander/all/'+id)}

  supprimerpost(id) {
    return this.http.delete(environment.baseUrl + 'demander/delete/' + id)
  }
}
