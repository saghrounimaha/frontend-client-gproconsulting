import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StageService} from '../../services/stage.service';
import {Stage} from '../../models/stage';

@Component({
  selector: 'app-editstage',
  templateUrl: './editstage.component.html',
  styleUrls: ['./editstage.component.css']
})
export class EditstageComponent implements OnInit {
  id;
  detailstage;
  stage= new Stage()
  constructor(private actvroute: ActivatedRoute,private srvcstage:StageService,private router:Router) {
    this.id = this.actvroute.params['_value']['id'];
    this.getbyid(this.id)
  }

  ngOnInit() {
  }


  getbyid(id){
    this.srvcstage.getbyid(id).subscribe(res=>{
      this.detailstage = res
    })
  }
  edit(){
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
    this.srvcstage.modifier(this.id,localStorage.getItem('idS'),data).subscribe(res=>{
console.log(res)
      this.router.navigate(['/espaceentreprise'])
    })
  }
}
