import { Component } from '@angular/core';
import {AuthetificationService} from './services/authetification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';

  constructor(private authsrvc: AuthetificationService) {
  }


  ngOnInit(): void {
    this.authsrvc.loadToken();
  }

}
