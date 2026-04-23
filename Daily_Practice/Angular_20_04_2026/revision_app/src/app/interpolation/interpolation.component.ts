import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  user_id: number = 101;
  user_name: string = 'Mukesh';
  profile_pic: string = 'assets/imagep.jpg';

  num1:number=10;
  num2:number=20;
}