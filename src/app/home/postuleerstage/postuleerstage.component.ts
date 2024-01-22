import { Component, OnInit } from '@angular/core';
import {ImageService} from '../../services/image.service';
import {StageService} from '../../services/stage.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Societe} from '../../models/societe';

@Component({
  selector: 'app-postuleerstage',
  templateUrl: './postuleerstage.component.html',
  styleUrls: ['./postuleerstage.component.css']
})
export class PostuleerstageComponent implements OnInit {
  filesToUpload: Array<File>;
  photo;
  id;
  constructor( private imgsrc: ImageService,private srvcstage:StageService,private actvroute:ActivatedRoute,private router:Router) {
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
    this.srvcstage.demandestage(data,localStorage.getItem("idStag"),this.id).subscribe(res=>{
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
