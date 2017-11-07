import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiService } from '../shared/services/api.service';

@IonicPage()
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomePage implements OnInit {
  posts: Array<any>;

  constructor(public navCtrl: NavController, private apiService: ApiService) { }
  getPosts(): void {
    this.apiService.getPosts().subscribe(data => this.posts=data);
  }

  ngOnInit(): void {
    this.getPosts();
  }
}
