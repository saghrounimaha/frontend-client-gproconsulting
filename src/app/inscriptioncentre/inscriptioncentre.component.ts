import { Component, OnInit } from '@angular/core';
import {CentreService} from '../services/centre.service';
import {Centre} from '../models/centre';
import {ImageService} from '../services/image.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from "sweetalert2";

@Component({
  selector: 'app-inscriptioncentre',
  templateUrl: './inscriptioncentre.component.html',
  styleUrls: ['./inscriptioncentre.component.css']
})
export class InscriptioncentreComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted = false;

  centre = new Centre();
  filesToUpload: Array<File>;
  photo;
  passwordConfirmationFailed = false;
  passwordConfirmationTxt = '';
  constructor(private srvccenter: CentreService, private imgsrc: ImageService,private router:Router, private formBuilder: FormBuilder) {
    this.photo = "choisir une image"
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmedPassword: ['', Validators.required],
      adresse: ['', Validators.required],
      siteweb: ['', Validators.required],
      telephone: ['', Validators.required],
      descreption: ['', Validators.required],
      photo: ['', Validators.required],
    }, {
      validator: this.MustMatch('password', 'confirmedPassword')
    })
  }
  get f() {
    return this.registerForm.controls;
  }


 inscriptioncentre() {
   this.registerForm.get('photo').setValue(this.photo)
    this.submitted = true;
   if (this.registerForm.invalid) {
     return;
   }

    this.srvccenter.ajouter(this.registerForm.value).subscribe(res => {
      console.log(res);
      this.imgsrc.pushFileToStorage(this.filesToUpload[0]).subscribe(rest => {
        console.log(rest)

      })
      this.photo = "choisir une image"
      this.router.navigate(['/'])
    }, error2 => {


      Swal.fire("Erreur!", "Login  déja exsite !");

    })

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
  recuperFile(file) {
    this.filesToUpload = <Array<File>>file.target.files;

    this.photo = file.target.files[0]['name'];
  }
}
