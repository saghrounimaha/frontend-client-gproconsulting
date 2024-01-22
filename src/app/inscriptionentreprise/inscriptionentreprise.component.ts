import { Component, OnInit } from '@angular/core';
import {Societe} from '../models/societe';
import {SocietesService} from '../services/societes.service';
import {ImageService} from '../services/image.service';
import {Router} from '@angular/router';
import {Centre} from '../models/centre';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-inscriptionentreprise',
  templateUrl: './inscriptionentreprise.component.html',
  styleUrls: ['./inscriptionentreprise.component.css']
})
export class InscriptionentrepriseComponent implements OnInit {
  societe = new Societe();
  filesToUpload: Array<File>;
  photo;
  idS;
  listesecteur;
  public registerForm: FormGroup;
  public submitted = false;
  passwordConfirmationFailed = false;
  constructor(private srvcsociete:SocietesService,private imgsrc:ImageService,private router:Router, private formBuilder: FormBuilder) {
    this.photo = "choisir une image"
    this.getallsecteur()
  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      nom: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmedPassword: ['', Validators.required],
      adresse: ['', Validators.required],
      siteweb: ['', Validators.required],

      ids: ['', Validators.required],
      descreption: ['', Validators.required],
      photo: ['', Validators.required],
    }, {
      validator: this.MustMatch('password', 'confirmedPassword')
    })
  }
  get f() {
    return this.registerForm.controls;
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        // return if another validator has already found an error on the matchingControl
        return;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({mustMatch: true});
      } else {
        matchingControl.setErrors(null);
      }
    }

  }

  inscriptionentreprise() {
    this.idS = this.registerForm.get('ids').value
    this.registerForm.get('photo').setValue(this.photo)
    console.log(this.idS)
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.srvcsociete.ajouterr(this.idS,this.registerForm.value).subscribe(res => {
      console.log(res);
      this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)

      });
      this.photo = "choisir une image"
      this.router.navigate(['/'])
    }, error2 => {


      Swal.fire("Erreur!", "Login  déja exsite !");

    })


  }

  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;

    this.photo = file.target.files[0]['name'];
  }
  getallsecteur(){
    this.srvcsociete.getall().subscribe(res=>{
      this.listesecteur=res
    })
  }
}
