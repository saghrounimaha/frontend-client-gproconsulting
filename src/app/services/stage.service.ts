import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  constructor(private http: HttpClient) {
  }

  ajouter(id, data) {
    return this.http.post(environment.baseUrl + 'stage/add/' + id, data)
  }

  allstagebysoc(id) {
    return this.http.get(environment.baseUrl + 'stage/allbysoc/' + id)
  }


  allsatge(id) {
    return this.http.get(environment.baseUrl + 'stage/all')
  }

  supprimer(id) {
    return this.http.delete(environment.baseUrl + 'stage/delete/' + id)
  }

  getbyid(id) {
    return this.http.get(environment.baseUrl + 'stage/ById/' + id)
  }

  modifier(id, idc, data) {
    return this.http.put(environment.baseUrl + 'stage/update/' + id + '/' + idc, data)
  }

  getallstage() {

    return this.http.get(environment.baseUrl + 'stage/all')
  }
  demandestage(data,ids,idst)
  {
    return this.http.post(environment.baseUrl+'postuler/add/'+ids+'/'+idst,data)
  }
  alldemandestagebysoc(id) {
    return this.http.get(environment.baseUrl + 'postuler/all/' + id)
  }

  supprimerpost(id) {
    return this.http.delete(environment.baseUrl + 'postuler/delete/' + id)
  }
}
