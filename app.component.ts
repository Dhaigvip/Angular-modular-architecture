import { Component, ViewContainerRef, Inject, ViewChild } from '@angular/core';
import { NavbarComponent } from 'sharedmodule';

import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
