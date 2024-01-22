import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CondidatService} from '../services/condidat.service';
import {Stagiaire} from '../models/stagiaire';
import Swal from "sweetalert2";
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  public registerForm: FormGroup;
  public submitted = false;
  passwordConfirmationFailed = false;
  stagiaire = new Stagiaire();
  passwordConfirmationTxt = '';

  constructor(private router: Router, private srvccondidiat: CondidatService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmedPassword: ['', Validators.required]
    }, {
      validator: this.MustMatch('password', 'confirmedPassword')
    })
  }

  get f() {
    return this.registerForm.controls;
  }

  inscription() {
    this.submitted = true;


    if (this.registerForm.invalid) {
      return;
    }

    this.srvccondidiat.ajouter(this.registerForm.value).subscribe(res => {
      console.log(res);
      this.stagiaire = new Stagiaire()
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
}
