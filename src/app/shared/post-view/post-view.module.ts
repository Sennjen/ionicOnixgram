import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimeAgoModule } from '../../shared/time-ago/time-ago.module'

import { PostViewComponent } from './post-view.component'

export const COMPONENTS = [
  PostViewComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TimeAgoModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class PostViewModule {
}
