import { Component, OnInit, Input } from '@angular/core';
import { InscriptionService} from './inscription.service';
import { InscriptionModel } from './inscription.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
  providers: [InscriptionService]
})
export class InscriptionComponent{

  

  constructor( private _inscriptionService: InscriptionService, private _router: Router) { 
    
  }
  
  // Local properties
  private model=new InscriptionModel('','','','','personnel','femme'); 

submitForm(){
    this._inscriptionService.getUtilisateur(this.model)
         .subscribe(restUtilisateursData => {
           localStorage.setItem('id_utilisateur',"1");
           this._router.navigateByUrl('/cv'); 
         },
         err => {       
           alert("Serveur indisponible!");
         }
         )
   
  }
  

}

