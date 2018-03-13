import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemUsersHomeComponent } from './system-users-home.component';
import { SystemUsersHomeRoutingModule } from './system-users-home-routing.module';
import { PageHeaderModule, StatModule } from '../../../shared/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    SystemUsersHomeRoutingModule,
    PageHeaderModule,
    StatModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  }),
    ReactiveFormsModule
  ],
  declarations: [SystemUsersHomeComponent]
})
export class SystemUsersHomeModule { }

export function createTranslateLoader(http: HttpClient) {
 
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
