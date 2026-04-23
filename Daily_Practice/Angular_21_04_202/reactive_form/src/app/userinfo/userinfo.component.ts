import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {

  userform = new FormGroup({
    username: new FormControl('', Validators.required),

    useremail: new FormControl('', [
      Validators.required,
      Validators.email
    ]),

    userpassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10)
    ])
  });

  onSubmit() {
    console.log(this.userform.value);
    alert('Form Submitted Successfully!' + this.userform.value.username);
  }
}