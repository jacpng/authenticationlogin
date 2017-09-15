import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoachlistPage } from './coachlist';

@NgModule({
  declarations: [
    CoachlistPage,
  ],
  imports: [
    IonicPageModule.forChild(CoachlistPage),
  ],
})
export class CoachlistPageModule {}
