import { Injectable } from '@angular/core';
import { Passport } from '../model/passport.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassportService {
  passportData: Passport = new Passport();
  passportList: Passport[] = [];
  readonly passportApiUrl = 'https://localhost:7026/api/Passports';

  constructor(private objHttp: HttpClient) { }

  getPassportLists() {
    this.objHttp.get<Passport[]>(this.passportApiUrl).subscribe({
      next: (res) => { this.passportList = res; },
      error: (err) => { console.error('Failed to load passports:', err); }
    });
  }

  postPassport() {
    return this.objHttp.post(this.passportApiUrl, this.passportData);
  }

  putPassport() {
    return this.objHttp.put(`${this.passportApiUrl}/${this.passportData.id}`, this.passportData);
  }

  deletePassport(id: number) {
    return this.objHttp.delete(`${this.passportApiUrl}/${id}`);
  }
}
