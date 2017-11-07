import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from './components';
import { PostViewModule } from '../shared/post-view/post-view.module';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module'

import { ExplorePage } from './explore';

@NgModule({
  declarations: [
    ExplorePage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    SharedPipesModule,
    ReactiveFormsModule,
    PostViewModule,
    IonicPageModule.forChild(ExplorePage),
  ],
  exports: [
    ExplorePage
  ]
})
export class ExploreModule {}
