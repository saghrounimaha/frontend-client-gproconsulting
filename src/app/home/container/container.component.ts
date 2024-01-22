import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/formation.service';
import {StageService} from '../../services/stage.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
listestages;
listeformations;
  constructor(private  srvcformation:FormationService,private srvcstage:StageService) {
    this.allstage();
    this.allformation()
  }

  ngOnInit() {
  }
allstage(){
    this.srvcstage.getallstage().subscribe(res=>{
      this.listestages =res
      console.log(res)
    })
}
  allformation(){
    this.srvcformation.getallformation().subscribe(res=>{
      console.log(res)
      this.listeformations=res
    })
  }
}
