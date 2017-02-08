import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2Webstorage } from 'ng2-webstorage';
import { Router, ActivatedRoute, Params, NavigationStart } from '@angular/router';
import { ToasterModule } from 'angular2-toaster';
import { PaginationModule } from 'ng2-bootstrap';
import { Select2Module } from 'ng2-select2';

import { HttpClient } from './../utility/http.client';
import { WebStorage } from './../utility/web.storage';

import { routing } from './../routs/app.routs';
import { AppConfig } from './../config/app.config';

import { AppComponent } from './../components/app-components/app.component';
import { HeaderComponent } from './../components/nav-components/header.component';
import { FooterComponent } from './../components/nav-components/footer.component';

import { HomeComponent } from './../components/home-components/home.component';
import { successComponent } from './../components/home-components/success.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    Ng2Webstorage,
    ToasterModule,
    Select2Module,
    PaginationModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    successComponent
  ],
  providers: [
    HttpClient,
    AppConfig,
    WebStorage
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }