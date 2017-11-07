import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html'
})
export class UserCardComponent{
  @Input() userData: Object;
  constructor(public navCtrl: NavController) { }
}
