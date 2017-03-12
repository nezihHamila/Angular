import { Component, OnInit} from '@angular/core';
import { AppServives} from './app.services';

import { InscriptionModel } from './inscription/inscription.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    providers: [AppServives]

})
export class AppComponent  {
 

 constructor( private _inscriptionService: AppServives, private _router: Router) { 
    
  }
  conecter: any= localStorage;
  public storedToken:string = localStorage.getItem('id_utilisateur');

 heroes: InscriptionModel[];

  onClick(){
     localStorage.removeItem('id_utilisateur');
  }
  submitConnection(log : string, pw: string){

    this._inscriptionService.connexion(log,pw)
         .subscribe((restUtilisateursData) => {
           localStorage.setItem('id_utilisateur',restUtilisateursData[0].id);
           this._router.navigateByUrl('/forum'); 
         },
         err => {       
           alert("Le nom de compte et / ou le mot de passe sont incorrects!");
         }
         )
     }

       
 
}
