import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiaRoutingModule } from './india-routing.module';
import { IndiaComponent } from './india.component';
import { NewDelhiComponent } from './new-delhi/new-delhi.component';
import { NewMumbaiComponent } from './new-mumbai/new-mumbai.component';


@NgModule({
  declarations: [IndiaComponent, NewDelhiComponent, NewMumbaiComponent],
  imports: [
    CommonModule,
    IndiaRoutingModule
  ],
  exports:[IndiaComponent]
})
export class IndiaModule { }
