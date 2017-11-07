import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html'
})
export class PostViewComponent{
  _postId: number;
  isShown: boolean;
  @Output() isShownChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() set postId(value: number) {
    if(value){
      this._postId = value;
      this.getPost(this._postId)
    }
  }

  postData: Object;
  constructor(public navCtrl: NavController, private apiService: ApiService) { }

  hideModal(event) {
    let target = event.target || event.srcElement || event.currentTarget;
    let value = target.attributes.class.nodeValue;
    if(value == "back-drop" || value == "modal-close-btn"){
      this.isShown = !this.isShown;
      this.isShownChange.emit(this.isShown);
    }
  }

  getPost(id): void {
    this.apiService.getPost(id).subscribe(data => {
      this.postData=data;
      this.isShown=true
    });
  }
}
