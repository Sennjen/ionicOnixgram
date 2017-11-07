import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { SharedPipesModule } from './shared/pipes/shared-pipes.module'
import { AppComponent } from './core/app.component';
import { ApiService } from './shared/services/api.service';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    CoreModule.forRoot(),
    SharedPipesModule.forRoot(),
    HttpModule
  ],
  schemas: [],
  bootstrap: [IonicApp],
  providers: [
    ApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
