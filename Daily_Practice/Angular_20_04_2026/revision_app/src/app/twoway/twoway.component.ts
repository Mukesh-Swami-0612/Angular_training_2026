import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent {
  emp_name: string = 'Mukesh';
  emp_email: string = 'emp1@gmail.com';
  emp_salary: number = 190000;
}