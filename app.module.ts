import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule, ErrorHandler, APP_INITIALIZER, LOCALE_ID } from '@angular/core';
import { RouterModule, Route, NavigationEnd, Router } from '@angular/router';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {SharedModule} from 'sharedmodule';

import { AppComponent } from './app.component';
import { MAIN_ROUTES } from './app.route.config';
import { ModuleA } from '../library/index';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [    
    RouterModule.forRoot(MAIN_ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    ModuleA
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
}
