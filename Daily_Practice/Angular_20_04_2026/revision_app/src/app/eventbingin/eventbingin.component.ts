import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbingin',
  templateUrl: './eventbingin.component.html',
  styleUrls: ['./eventbingin.component.css']
})
export class EventbinginComponent {
  welcome() {
    alert('Welcome to data binding');
  }
}