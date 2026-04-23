import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName: string = '';
  messageFromChild: string = '';

  receiveGreeting(msg: string) {
    this.messageFromChild = msg;
  }
}