import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiService } from '../shared/services/api.service';

@IonicPage()
@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfilePage implements OnInit{
  profileData: Object;
  postId: number;

  constructor(public navCtrl: NavController, private apiService: ApiService) { }

  explorePost(id) {
    this.postId = id;
  }

  getUser(id): void {
    this.apiService.getUser(id).subscribe(data => this.profileData = data);
  }

  ngOnInit(): void {
    this.getUser(1);
  }
}
