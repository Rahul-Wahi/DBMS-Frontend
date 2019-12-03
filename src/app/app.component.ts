import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Crime analysis';

  constructor() {
    const admin = {  password: 'admin',
      phonenumber: 0,
      dateofbirth: Date.now(),
      firstname : 'admin',
      lastname : 'admin',
      admin: 'Y'};
    localStorage.setItem('admin', JSON.stringify(admin));
  }
}
