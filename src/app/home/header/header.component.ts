import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
etat :boolean = false;
  subscription: Subscription;

  constructor(private router:Router) {

    if(localStorage.getItem('etat') != null){
      this.etat= true;
      console.log(this.etat)
    }


  }

  ngOnInit() {
  }

  deconnexion(){
    localStorage.clear()
    this.router.navigate(['/'])
    this.etat=false;
  }
}
