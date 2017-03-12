import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import { InscriptionComponent} from './inscription/inscription.component';
import { ForumComponent} from './cv/cv.component';
import { FrameworkComponent} from './framework/framework.component';


export const router: Routes = [
    { path: '', redirectTo: 'cv', pathMatch: 'full' },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'cv', component: ForumComponent },
    { path: 'framework/:type', component: FrameworkComponent }  

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);