import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContainerComponent} from './home/container/container.component';
import {LoginComponent} from './login/login.component';
import {InscriptionComponent} from './inscription/inscription.component';
import {InscriptionentrepriseComponent} from './inscriptionentreprise/inscriptionentreprise.component';
import {InscriptioncentreComponent} from './inscriptioncentre/inscriptioncentre.component';
import {FormationComponent} from './home/formation/formation.component';
import {AddformationComponent} from './home/addformation/addformation.component';
import {SocieteComponent} from './home/societe/societe.component';
import {EditformationComponent} from './home/editformation/editformation.component';
import {AddstageComponent} from './home/addstage/addstage.component';
import {EditstageComponent} from './home/editstage/editstage.component';
import {DetailleformationComponent} from './home/detailleformation/detailleformation.component';
import {DetaillestageComponent} from './home/detaillestage/detaillestage.component';
import {PostuleerstageComponent} from './home/postuleerstage/postuleerstage.component';
import {DemandeformationComponent} from './home/demandeformation/demandeformation.component';
import {ListdemandestageComponent} from './home/listdemandestage/listdemandestage.component';
import {ListdemandesformationComponent} from './home/listdemandesformation/listdemandesformation.component';


const routes: Routes = [{path: '', component: HomeComponent, children:
    [{path: '', component: ContainerComponent},
      {path: 'login', component: LoginComponent},
      {path: 'inscription', component: InscriptionComponent},
      {path:'societes',component:InscriptionentrepriseComponent},
      {path:'centres',component:InscriptioncentreComponent},
      {path:'centreformation',component:FormationComponent},
      {path:'centreformation/ajouterformation',component:AddformationComponent},
      {path:'centreformation/:id/editformation',component:EditformationComponent},
      {path:'espaceentreprise',component:SocieteComponent},
      {path:'espaceentreprise/ajouterStage',component:AddstageComponent},
      {path:'espaceentreprise/:id/detaillestage',component:EditstageComponent},
      {path:'centreformation/:id/detailleformation',component:DetailleformationComponent},
      {path:'espaceentreprise/:id/detaillestagee',component:DetaillestageComponent},
      {path:'espaceentreprise/detaillestagee/:id/postuler',component:PostuleerstageComponent},
      {path:'centreformation/detailleformation/:id/postuler',component:DemandeformationComponent},
      {path:'espaceentreprise/Demandes',component:ListdemandestageComponent},
      {path:'centreformation/Demandes',component:ListdemandesformationComponent}
    ]}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
