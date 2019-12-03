import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { DashboardComponent } from '../../dashboard/dashboard.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  buttonDisabled: boolean;
  static path = () => ['login'];

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public snackBar: MatSnackBar
  ) {
    this.initFormBuilder();
  }

  ngOnInit() { this.buttonDisabled = true;
  }

  loginUser() {

    if(localStorage.getItem(this.form.value.username) === null){
      this.snackBar.open('Username Not present', '', {
        duration: 2000,
      });
    } else{
      console.log(JSON.parse(localStorage.getItem(this.form.value.username)));
      if(JSON.parse(localStorage.getItem(this.form.value.username)).password === this.form.value.password) {
        const sessionLogin = {username: this.form.value.username, flag: 'true'};
        localStorage.setItem('sessionLogin',  JSON.stringify(sessionLogin));

        console.log(this.form.value.password);
        this.router.navigate(DashboardComponent.path());
      }else{
        this.snackBar.open('Password Not matched', '', {
          duration: 2000,
        });
      } 
    }
  }

  focusOut(){ console.log('focusout');
    if ( this.form.value.username === '' || this.form.value.password=== '') {
      this.buttonDisabled = true;
    } else {
      this.buttonDisabled = false;
    }
  }

  private initFormBuilder() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
