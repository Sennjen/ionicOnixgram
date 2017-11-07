import { Component, OnInit } from '@angular/core';
import { App } from 'ionic-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  isFocused: boolean = false;
  searchQuery: string = '';
  navIsFixed: boolean = false;

  focusSearch(el) {
    this.isFocused = true;
    el.focus();
  }

  clearSearch() {
    this.isFocused = false;
    this.searchQuery = '';
  }

  constructor(public appCtrl: App) {}

  ngOnInit() {}

  pushPage(page) {
    this.appCtrl.getRootNav().push(page);
  }
}
