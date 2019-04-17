import { NgModule, ErrorHandler, InjectionToken, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'sharedmodule';


import { ComponentA } from './module-library/module-components/componentA/componentA.component';
import { ComponentB } from './module-library/module-components/componentB/componentB.component';
import { TestService } from './module-library/module-services/moduleA.Test.Service';


// export * from './module-library/module-components/navbar/navbar.component';
// export * from './module-library/module-components/container/container.component';
export * from './module-library/module-components/componentA/componentA.component';
export * from './module-library/module-components/componentB/componentB.component';

export * from './module-library/module-objects/module.domain.interfaces';




@NgModule({
  imports: [
    FormsModule
    , CommonModule
    , RouterModule
    , SharedModule
  ],
  declarations: [
    ComponentA
    , ComponentB
  ],
  providers: [
    { provide: 'ITestService', useClass: TestService }
  ],
  exports: [
    FormsModule
  ]
})

export class ModuleA {
  static forRoot(): ModuleA {
    return {
      ngModule: ModuleA
    };
  }
}
