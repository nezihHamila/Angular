import { Component, OnInit } from '@angular/core';
import { QuestionModel } from './framework.model';
import { FrameworkServices} from './framework.services';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css'],
  providers: [FrameworkServices]
})
export class FrameworkComponent implements OnInit {

  constructor(private _frameworkServices: FrameworkServices, private _activatedRoute: ActivatedRoute) { }

  private type: string;
  public questionModels: QuestionModel[];

  ngOnInit() {

    this._activatedRoute.params.subscribe(params => {
        this.type=params['type']; 
      });

    this._frameworkServices.getQuestionByType(this.type)
    .subscribe(restQuestionsData => {
               this.questionModels= restQuestionsData;
               console.log("restQuestionsData.length");
                                                          
         },
         err => {       
           console.log("erreur");
           alert("Serveur indisponible!");
         }
         )
  }

}
