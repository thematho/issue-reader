import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { IssuesModule } from './issues/issues.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    SharedModule,
    IssuesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
