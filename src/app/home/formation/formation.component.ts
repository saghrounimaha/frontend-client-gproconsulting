import { Component, OnInit } from '@angular/core';
import {FormationService} from '../../services/formation.service';
import {Formation} from '../../models/formation';
import {ImageService} from '../../services/image.service';
import {Societe} from '../../models/societe';
import {Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {

listeformation;
  constructor(private  srvcformation:FormationService) {
this.getallformation()
  }

  ngOnInit() {
  }

  getallformation(){
    this.srvcformation.allformation(localStorage.getItem('idc')).subscribe(res=>{
      this.listeformation = res;
      console.log( this.listeformation)
    })
  }
supprimer(id){

  Swal.fire({
    title: 'Êtes-vous sûr?',
    text: 'Vous ne pourrez pas revenir en arrière!',
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Oui, supprimez-le!',
    // timer: 1500
  }).then((result) => {
    if (result.value) {
      this.srvcformation.supprimer(id).subscribe(res=>{
        console.log(res)
        this.getallformation()
      })
      Swal.fire(
        'Supprimé!',
        'Formation a été supprimé',
        'success'
      );
    }
  });


}


}
