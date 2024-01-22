import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/formation.service';
import {Formation} from '../../models/formation';
import {ImageService} from '../../services/image.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-editformation',
  templateUrl: './editformation.component.html',
  styleUrls: ['./editformation.component.css']
})
export class EditformationComponent implements OnInit {
  formation= new Formation();
  filesToUpload: Array<File>;
  photo;
  id;
  detaillformation;

  constructor(private  srvcformation:FormationService,private actvroute: ActivatedRoute,private imgsrc:ImageService,private router:Router) {
    this.id = this.actvroute.params['_value']['id'];
    this.getbyid(this.id)
    this.photo = "choisir une image"
  }

  ngOnInit() {
  }
  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;

    this.detaillformation.photo = file.target.files[0]['name'];
  }
getbyid(id){
    this.srvcformation.getbyid(id).subscribe(res=>{
      this.detaillformation=res
      console.log(res)
    })
}

edit(){
  const data ={
    descreption:this.detaillformation.descreption,
    titre:this.detaillformation.titre,
    prix:this.detaillformation.prix,
    duree:this.detaillformation.duree,
    dateDebut:this.detaillformation.dateDebut,
    dateFin:this.detaillformation.dateFin,
    photo: this.detaillformation.photo
  }
  console.log(data)
  console.log(this.photo)
    this.srvcformation.modifier(this.id,localStorage.getItem('idc'),data).subscribe(res=>{
      if (this.filesToUpload !== undefined) {

        this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
          console.log(rest);
        });
      }
    })

  }


}
