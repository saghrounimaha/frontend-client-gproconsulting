import { Component, OnInit } from '@angular/core';
import {AuthetificationService} from '../services/authetification.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
role;
  constructor( public authServ: AuthetificationService,private router:Router) {




  }

  ngOnInit() {
  }
  getprofileadmine() {
    this.authServ.getprofile().subscribe(res => {

    console.log(res)
      localStorage.setItem('userr',JSON.stringify(res))
      console.log(localStorage.getItem('userr'))
      // console.log(res['roles'][0]['roleName']);
    });
  }
}
