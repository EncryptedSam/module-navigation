import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewDelhiComponent } from './new-delhi/new-delhi.component';
import { NewMumbaiComponent } from './new-mumbai/new-mumbai.component';
import { IndiaComponent } from './india.component';

const routes: Routes = [
  {path:'india',component:IndiaComponent,children:[
    {path:'new-mumbai', component:NewMumbaiComponent},
    {path:'new-delhi', component:NewDelhiComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndiaRoutingModule { }
