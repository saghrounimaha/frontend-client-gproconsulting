import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { ContainerComponent } from './home/container/container.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionentrepriseComponent } from './inscriptionentreprise/inscriptionentreprise.component';
import { InscriptioncentreComponent } from './inscriptioncentre/inscriptioncentre.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormationComponent } from './home/formation/formation.component';
import { AddformationComponent } from './home/addformation/addformation.component';
import { SocieteComponent } from './home/societe/societe.component';
import {PubSubModule} from 'angular7-pubsub';
import { EditformationComponent } from './home/editformation/editformation.component';
import { AddstageComponent } from './home/addstage/addstage.component';
import { EditstageComponent } from './home/editstage/editstage.component';
import { DetaillestageComponent } from './home/detaillestage/detaillestage.component';
import { DetailleformationComponent } from './home/detailleformation/detailleformation.component';
import { PostuleerstageComponent } from './home/postuleerstage/postuleerstage.component';
import { DemandeformationComponent } from './home/demandeformation/demandeformation.component';
import { ListdemandestageComponent } from './home/listdemandestage/listdemandestage.component';
import { ListdemandesformationComponent } from './home/listdemandesformation/listdemandesformation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    LoginComponent,
    InscriptionComponent,
    InscriptionentrepriseComponent,
    InscriptioncentreComponent,
    FormationComponent,
    AddformationComponent,
    SocieteComponent,
    EditformationComponent,
    AddstageComponent,
    EditstageComponent,
    DetaillestageComponent,
    DetailleformationComponent,
    PostuleerstageComponent,
    DemandeformationComponent,
    ListdemandestageComponent,
    ListdemandesformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    PubSubModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
