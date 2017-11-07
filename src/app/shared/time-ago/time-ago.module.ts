import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedPipesModule } from '../pipes/shared-pipes.module'

import { TimeAgoComponent } from './time-ago.component'


@NgModule({
  imports:[
    CommonModule,
    SharedPipesModule
  ],
  declarations: [TimeAgoComponent],
  exports: [TimeAgoComponent],
})
export class TimeAgoModule {
}
