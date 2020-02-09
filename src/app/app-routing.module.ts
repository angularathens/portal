import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularAthensComponent} from './angular-athens/angular-athens.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


const routes: Routes = [
  { path: 'angular-athens', component: AngularAthensComponent },
  { path: '',
    redirectTo: '/angular-athens',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
