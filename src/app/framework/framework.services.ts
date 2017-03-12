import { Injectable} from '@angular/core';

import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { QuestionModel }  from './framework.model';
import { Router } from '@angular/router';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'; 
import {Observable} from 'rxjs/Rx';

@Injectable()

export class FrameworkServices {

  private _url: string = "http://localhost:8080/question/getByType/:type";
  constructor( private _http: Http, private _router: Router) { }


getQuestionByType (type : string): Observable<QuestionModel[]> {
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option
        
        let params: URLSearchParams = new URLSearchParams();
        params.set('type',type);
        options.search = params ;
        return this._http.get(this._url,options) // ...using post request
                         .map((res:Response) => { 
                            console.log("I CAN SEE DATA HERE 1: ", res.json());
                           return res.json();// ...and calling .json() on the response to return data
                         }) 
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')); //...errors if any
    }   

 

}