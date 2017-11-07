import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiService } from '../shared/services/api.service';

@IonicPage()
@Component({
  selector: 'app-explore',
  templateUrl: 'explore.component.html'
})
export class ExplorePage implements OnInit{
  postId: number;

  usersList: Array<any>;
  gallery: Array<any>;

  explorePost(id) {
    this.postId = id;
  }

  constructor(public navCtrl: NavController, private apiService: ApiService) { }

  getGallery(): void {
    this.apiService.getGallery().subscribe(data => this.gallery = data);
  }

  getUsers(): void {
    this.apiService.getUsers().subscribe(data => this.usersList = data);
  }

  ngOnInit(): void {
    this.getGallery();
    this.getUsers();
  }
}
