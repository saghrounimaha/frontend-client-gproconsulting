import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthetificationService {

  public jwt: string;
  public username: string;
  public roles: string[];

  constructor(private http: HttpClient) {
  }

  public login(data) {
    return this.http.post('http://localhost:9000' + '/login', data, {observe: 'response'});
  }


  public parseJWT() {

    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
  }
  public saveToken(jwt: string) {

    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }

   public isSociete() {
   return this.roles.indexOf("ResponsableSociete") >= 0;
 }

  public isCentre() {
    return this.roles.indexOf("ResponsableCentre") >= 0;
  }

  public isUser() {
    return this.roles.indexOf("STAGIAIRE") >= 0;
   }



  public loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }

  public logout() {
    localStorage.removeItem('token');
    this.initParams();
  }

  public initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }
  getprofile() {
    //permet d'affficher le user courant
    const headers = new HttpHeaders({'authorization': 'Bearer ' + this.jwt});

    return this.http.get('http://localhost:9000/admin/users', {headers: headers});
  }
}
