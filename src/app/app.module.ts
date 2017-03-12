import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppServives} from './app.services';
import { NglModule } from 'ng-lightning';

import { routes } from './app.router';


import {NavbarComponent} from '../navbar/navbar.component';


import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ForumComponent } from './cv/cv.component';
import { FrameworkComponent } from './framework/framework.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InscriptionComponent,
    ForumComponent,
    FrameworkComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
  ],
  providers: [AppServives],
  bootstrap: [AppComponent]
})
export class AppModule { }

 


