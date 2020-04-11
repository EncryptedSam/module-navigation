import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndiaModule } from './india/india.module';
import { UnitedStatesModule } from './united-states/united-states.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndiaModule,
    UnitedStatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
