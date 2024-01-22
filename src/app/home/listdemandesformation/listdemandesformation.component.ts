import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/formation.service';

@Component({
  selector: 'app-listdemandesformation',
  templateUrl: './listdemandesformation.component.html',
  styleUrls: ['./listdemandesformation.component.css']
})
export class ListdemandesformationComponent implements OnInit {
listedemande;
  constructor(private srvcf:FormationService) {
    this.getalldemande()
  }

  ngOnInit() {
  }
getalldemande(){
    this.srvcf.alldemandeformation(localStorage.getItem('idc')).subscribe(res=>{
      this.listedemande=res
     console.log(res)
    })
}
supprimer(id){
    this.srvcf.supprimerpost(id).subscribe(res=>{
      console.log(res)
      this.getalldemande()
    })
}
}
