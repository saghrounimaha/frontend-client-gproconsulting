import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Formation} from '../../models/formation';
import {FormationService} from '../../services/formation.service';

@Component({
  selector: 'app-detailleformation',
  templateUrl: './detailleformation.component.html',
  styleUrls: ['./detailleformation.component.css']
})
export class DetailleformationComponent implements OnInit {
id;
detaimlf;
statu:boolean ;
  constructor(private actvroute:ActivatedRoute,private srvcf:FormationService) {
    this.id = this.actvroute.params['value']['id']
    this.getbyid(this.id)
    if(localStorage.getItem("etat")!=null)
    {this.statu=true}

  }

  ngOnInit() {
  }
getbyid(id){
    this.srvcf.getbyid(id).subscribe(res=>{
      console.log(res)
      this.detaimlf=res;

    })
}
}
