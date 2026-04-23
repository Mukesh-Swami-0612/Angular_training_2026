import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  persons = [
    { name: 'Mukesh', doj: '2022-01-10', salary: 50000, profession: 'Developer' },
    { name: 'Ravi', doj: '2021-03-15', salary: 60000, profession: 'Manager' },
    { name: 'Ankit', doj: '2023-06-20', salary: 40000, profession: 'Tester' },
    { name: 'Neha', doj: '2020-09-12', salary: 55000, profession: 'HR' },
    { name: 'Priya', doj: '2022-11-01', salary: 48000, profession: 'Developer' },
    { name: 'Aman', doj: '2019-07-25', salary: 70000, profession: 'Manager' },
    { name: 'Simran', doj: '2023-02-18', salary: 42000, profession: 'Tester' },
    { name: 'Karan', doj: '2021-12-05', salary: 45000, profession: 'Designer' } // Not in list
  ];

  getDescription(profession: string): string {
    switch (profession) {
      case 'Developer':
        return 'Writes and maintains code';
      case 'Manager':
        return 'Manages team and projects';
      case 'Tester':
        return 'Tests applications for bugs';
      case 'HR':
        return 'Handles recruitment and employee relations';
      default:
        return 'No description available';
    }
  }

  getClass(profession: string): string {
    switch (profession) {
      case 'Developer':
        return 'dev';
      case 'Manager':
        return 'manager';
      case 'Tester':
        return 'tester';
      case 'HR':
        return 'hr';
      default:
        return 'unknown';
    }
  }
}