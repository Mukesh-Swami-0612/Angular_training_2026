import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../services/passport.service';
import { Passport } from '../../model/passport.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(public srv: PassportService) { }

  ngOnInit(): void {
    this.srv.getPassportLists();
  }

  // Fill the register form with the selected passport for editing
  fillForm(selectedPassport: Passport) {
    this.srv.passportData = Object.assign({}, selectedPassport);
  }

  // Delete passport by id
  onDelete(pid: number) {
    if (confirm('Are you sure you want to delete this passport?')) {
      this.srv.deletePassport(pid).subscribe({
        next: () => {
          alert('Passport Deleted Successfully!');
          this.srv.getPassportLists();
        },
        error: (err) => { alert('Error: ' + err.message); }
      });
    }
  }
}
