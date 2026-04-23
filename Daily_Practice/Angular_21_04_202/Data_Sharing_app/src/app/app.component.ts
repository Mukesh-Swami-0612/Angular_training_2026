import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data_Sharing_app';

  salary: number = 0;
  bonus: number = 0;

  receiveBonus(bonusRc: number) {
    this.bonus = bonusRc;
  }
}