import { Component, OnInit } from '@angular/core';
import {Formation} from '../../models/formation';
import {FormationService} from '../../services/formation.service';
import {ImageService} from '../../services/image.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.css']
})
export class AddformationComponent implements OnInit {
  formation= new Formation();
  filesToUpload: Array<File>;
  photo;
  constructor(private  srvcformation:FormationService,private imgsrc:ImageService,private router:Router) {
    this.photo = "choisir une image"
  }

  ngOnInit() {
  }
  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;

    this.photo = file.target.files[0]['name'];
  }
  ajouter(){
    const data ={
      descreption:this.formation.descreption,
      titre:this.formation.titre,
      prix:this.formation.prix,
      duree:this.formation.duree,
      dateDebut:this.formation.dateDebut,
      dateFin:this.formation.dateFin,
      photo: this.filesToUpload[0].name
    }
    console.log(data)
    this.srvcformation.ajouter(localStorage.getItem('idc'),data).subscribe(res=>{
      console.log(res)
      this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)
        this.formation = new Formation();
        this.photo = "choisir une image"
        this.router.navigate(['/centreformation'])
      })
    })
  }
}
