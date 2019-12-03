import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  buttonDisabled: boolean;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar
  ) {
    this.initFormBuilder();
  }

  ngOnInit() { this.buttonDisabled = true;
  }

  back() {
    this.router.navigate(['/authenticator/login']);
  }
  registerUser() {
      console.log(this.form.value.email);
      const testObject = { email: this.form.value.email,
      password: this.form.value.password,
      phonenumber: this.form.value.phonenumber,
      dateofbirth: this.form.value.dateofbirth,
      firstname : this.form.value.firstname,
      lastname : this.form.value.lastname,
      admin: 'N'};
      console.log(testObject);
      localStorage.setItem(this.form.value.username,  JSON.stringify(testObject));
      this.router.navigate(['/authenticator/login']);
  }

  focusOut(){ console.log('focusout');
    if (this.form.value.email === '' || this.form.value.username === '' || this.form.value.password==='') {
      this.buttonDisabled = true;
    } else {
      this.buttonDisabled = false;
    }
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', Validators.required],
      firstname: ['', Validators.nullValidator],
      lastname: ['', Validators.nullValidator],
      phonenumber: ['', Validators.nullValidator],
      dateofbirth: ['', Validators.nullValidator],
    });
  }
}
