import { Component, OnInit } from '@angular/core';
import {Stage} from '../../models/stage';
import {StageService} from '../../services/stage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addstage',
  templateUrl: './addstage.component.html',
  styleUrls: ['./addstage.component.css']
})
export class AddstageComponent implements OnInit {
type;
  stage = new Stage()
  constructor(private srvcstage:StageService,private  router:Router) { }

  ngOnInit() {
  }

  ajouter(){
    const data={
      titre:this.stage.titre,
      descreption:this.stage.descreption,
      technologie:this.stage.technologie,
      type :this.stage.type,
      duree:this.stage.duree,
      dateDebut:this.stage.dateDebut,
      dateFin:this.stage.dateFin,
      nombrestagiaire:this.stage.nombrestagiaire
    }
    console.log(data)
    this.srvcstage.ajouter(localStorage.getItem('idS'),data).subscribe(res=>{
      console.log(res)
      this.stage = new Stage()
      this.router.navigate(['/espaceentreprise'])
    })

  }

}
