import { Component, OnInit } from '@angular/core';
import {SocietesService} from '../../services/societes.service';
import {StageService} from '../../services/stage.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-societe',
  templateUrl: './societe.component.html',
  styleUrls: ['./societe.component.css']
})
export class SocieteComponent implements OnInit {
listestage;
  constructor(private srvcstg:StageService) {
    this.getallstage()
  }

  ngOnInit() {
  }
 getallstage(){
    this.srvcstg.allstagebysoc(localStorage.getItem('idS')).subscribe(res=>{
      console.log(res)
      this.listestage = res
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
       this.srvcstg.supprimer(id).subscribe(res=>{
         console.log(res)
         this.getallstage()
       })
       Swal.fire(
         'Supprimé!',
         'Stage a été supprimé',
         'success'
       );
     }
   });

 }
}
