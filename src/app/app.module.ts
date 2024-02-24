import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarJrmbComponent } from './components/navbar-jrmb/navbar-jrmb.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarJrmbComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
