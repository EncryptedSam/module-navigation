import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewYorkComponent } from './new-york/new-york.component';
import { WashingtonComponent } from './washington/washington.component';
import { UnitedStatesComponent } from './united-states.component';


const routes: Routes = [
  {path:'united-states',component:UnitedStatesComponent, children:[
    {path:'new-york', component:NewYorkComponent},
    {path:'washington', component:WashingtonComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitedStatesRoutingModule { }
