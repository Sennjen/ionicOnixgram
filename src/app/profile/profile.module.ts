import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedPipesModule } from '../shared/pipes/shared-pipes.module'
import { PostViewModule } from '../shared/post-view/post-view.module';
import { IonicPageModule } from 'ionic-angular';

import { ProfilePage } from './profile';

@NgModule({
  declarations: [
    ProfilePage
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedPipesModule,
    PostViewModule,
    IonicPageModule.forChild(ProfilePage)
  ],
  exports: [
    ProfilePage
  ],
  providers: []
})
export class ProfileModule {}
