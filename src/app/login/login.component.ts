import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from "sweetalert2";
import {NavigationEnd, Router} from '@angular/router';
import {AuthetificationService} from '../services/authetification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
private loginForm:FormGroup
  submitted = false;
  role;
  constructor(private formBuilder:FormBuilder,private authServ: AuthetificationService,private router:Router) {

    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationEnd) {
        // trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
        // if you need to scroll back to top, here is the right place
        window.scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    const data = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password

    };
    this.submitted = true;

    this.authServ.login(data).subscribe(res => {

      const  jwt = res.headers.get('Authorization');
      this.authServ.saveToken(jwt);
      console.log(res);
      this.router.navigate(['/']);
      this.getprofileadmine()

    },error2 => {


      Swal.fire("Erreur!", "S’il vous plaît vérifier votre login et votre mot de passe et essayez à nouveau !");

    });

    if (this.loginForm.invalid) {
      return;
    }

  }
  getprofileadmine() {
    this.authServ.getprofile().subscribe(res => {
console.log(res);
      this.role=res['roles'][0]['roleName']
      if(this.role=='ResponsableCentre' && res['etat']== true)
      { localStorage.setItem('idc',res['id'])
        console.log(localStorage.getItem('idc'))
        this.router.navigate(['/centreformation'])
        localStorage.setItem('etat','true')

      }
      else if(this.role=='ResponsableSociete'  && res['etat']== true){
        localStorage.setItem('idS',res['id'])
        this.router.navigate(['/espaceentreprise'])
        localStorage.setItem('etat','true')


      }

      else if(this.role=='STAGIAIRE'  && res['etat']== false){
        this.router.navigate(['/'])
        localStorage.setItem('etat','true')
        localStorage.setItem("idStag",res['id'])


      }
      else{
        this.router.navigate(['/'])
        alert("votre demande pas encore traiter")
      }
      //console.log(this.role)
      //localStorage.setItem('user',res["id"])
      //console.log(localStorage.getItem('user'))
      // console.log(res['roles'][0]['roleName']);
    });
  }

}
