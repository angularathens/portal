import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularAthensComponent} from './angular-athens/angular-athens.component';


const routes: Routes = [
  { path: 'angular-athens', component: AngularAthensComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
