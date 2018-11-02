import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mUsername = '';
  mPassword = '';

  constructor() { }

  ngOnInit() {
  }

  onClickSubmit() {
    if (this.mUsername === 'kisekitw@gmail.com' && this.mPassword === '1234') {
      window.alert('Login Success!');
    } else {
      window.alert('Login Failed!');
    }
  }
}
