import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from 'ionic-angular';


import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout.component';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

export const COMPONENTS = [
  AppComponent,
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  declarations: COMPONENTS,
  schemas: [],
  exports: COMPONENTS,
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
