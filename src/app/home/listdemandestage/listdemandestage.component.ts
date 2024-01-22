import { Component, OnInit } from '@angular/core';
import {StageService} from '../../services/stage.service';

@Component({
  selector: 'app-listdemandestage',
  templateUrl: './listdemandestage.component.html',
  styleUrls: ['./listdemandestage.component.css']
})
export class ListdemandestageComponent implements OnInit {
listedemndes;
  constructor(private srvcstage:StageService) {
    this.getalldemandes()
  }

  ngOnInit() {
  }

  getalldemandes(){
    this.srvcstage.alldemandestagebysoc(localStorage.getItem('idS')).subscribe(res=>{
      this.listedemndes=res;
      console.log(this.listedemndes)
    })
  }

  supprimer(id){
    this.srvcstage.supprimerpost(id).subscribe(res=>{
      console.log(res)
      this.getalldemandes();
    });
  }
}
