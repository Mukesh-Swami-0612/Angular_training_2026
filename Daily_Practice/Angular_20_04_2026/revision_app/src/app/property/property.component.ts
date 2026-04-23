import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
  emp_name: string = 'Mukesh';
  img_url: string = 'assets/imagep.jpg';
  isDisabled: boolean = false;

  enableButton() {
    this.isDisabled = false;
  }
}