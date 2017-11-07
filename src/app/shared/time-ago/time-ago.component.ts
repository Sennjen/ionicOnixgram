import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-time-ago',
  templateUrl: './time-ago.component.html'
})
export class TimeAgoComponent{
  @Input() timeStamp: boolean;
}
