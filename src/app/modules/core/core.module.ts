import { ModuleWithProviders, NgModule } from '@angular/core';

import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ApiService
      ]
    };
  }
}
