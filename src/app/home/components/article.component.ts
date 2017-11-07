import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent{
  @Input() postData: Object;
  constructor(public navCtrl: NavController) { }
}
