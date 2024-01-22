import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StageService} from '../../services/stage.service';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-detaillestage',
  templateUrl: './detaillestage.component.html',
  styleUrls: ['./detaillestage.component.css']
})
export class DetaillestageComponent implements OnInit {
id;
  detstage;
  statu:boolean;
  filesToUpload: Array<File>;
  photo;
  constructor(private actvroute:ActivatedRoute, private imgsrc: ImageService,private srvcstage:StageService) {
    this.id = this.actvroute.params['value']['id']

    this.getbyidd(this.id)
    if(localStorage.getItem("etat")!=null)
    {this.statu=true}
  }

  ngOnInit() {
  }
 getbyidd(id){
    this.srvcstage.getbyid(id).subscribe(res=>{
      console.log(res)
      this.detstage=res;
    })
 }

  postuler(){
    const data ={
      photo: this.filesToUpload[0].name
    }
    this.srvcstage.demandestage(data,this.id,localStorage.getItem("idStag")).subscribe(res=>{
      console.log(res)
    })
  }
}
