import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() salary: number = 0;

  @Output() bonusEvent = new EventEmitter<number>();

  calculateBonus() {
    const bonus = this.salary * 0.15;
    this.bonusEvent.emit(bonus);
  }
}