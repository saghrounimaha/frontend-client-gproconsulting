import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ImageService} from '../../services/image.service';
import {StageService} from '../../services/stage.service';
import {FormationService} from '../../services/formation.service';

@Component({
  selector: 'app-demandeformation',
  templateUrl: './demandeformation.component.html',
  styleUrls: ['./demandeformation.component.css']
})
export class DemandeformationComponent implements OnInit {
  filesToUpload: Array<File>;
  photo;
  id;
  constructor( private imgsrc: ImageService,private srvcform:FormationService,private actvroute:ActivatedRoute,private router:Router) {
    this.id = this.actvroute.params['value']['id']
    this.photo="choisir une photo"
  }
  ngOnInit() {
  }
  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;

    this.photo = file.target.files[0]['name'];
  }
  postuler(){
    const data ={
      photo: this.filesToUpload[0].name
    }
    this.srvcform.demandeformation(data,this.id,localStorage.getItem("idStag")).subscribe(res=>{
      console.log(res)
      this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)

      })
      this.photo="choisir une photo"
      alert("votre Demaande a éte enovyer avec succée")
      this.router.navigate(['/'])
    })
  }
}
