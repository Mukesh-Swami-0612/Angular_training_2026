import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../services/passport.service';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public srv: PassportService) {}

  ngOnInit(): void {
    this.resetForm();
  }

  // ✅ Reset Form
  resetForm(form?: NgForm) {
    if (form) form.resetForm();

    this.srv.passportData = {
      id: 0,
      holderName: '',
      passportNumber: '',
      expiryDate: '',
      ppoCode: ''
    };
  }

  savePassport(form: NgForm) {
    if (this.srv.passportData.id === 0) {
      // 👉 CREATE
      this.srv.postPassport().subscribe({
        next: () => {
          this.afterSuccess(form, 'Passport Created Successfully!');
        },
        error: (err) => this.handleError(err)
      });
    } else {

      this.srv.putPassport().subscribe({
        next: () => {
          this.afterSuccess(form, 'Passport Updated Successfully!');
        },
        error: (err) => this.handleError(err)
      });
    }
  }

  deletePassport(id: number) {
    if (confirm('Are you sure you want to delete this passport?')) {
      this.srv.deletePassport(id).subscribe({
        next: () => {
          this.srv.getPassportLists();
          alert('Passport Deleted Successfully!');
        },
        error: (err) => this.handleError(err)
      });
    }
  }
  private afterSuccess(form: NgForm, message: string) {
    this.resetForm(form);
    this.srv.getPassportLists();
    alert(message);
  }

  private handleError(err: HttpErrorResponse) {
    if (err.status === 0) {
      alert('Cannot connect to server: ' + this.srv.passportApiUrl);
    } else {
      alert(`Error ${err.status}: ${err.error?.message || err.statusText}`);
    }
  }
}