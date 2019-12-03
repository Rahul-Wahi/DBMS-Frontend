import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { RoutingAuthModule } from './routing-auth.module';
import { DemoMaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticatorComponent } from './authenticator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RoutingAuthModule,
    DemoMaterialModule
  ],
  declarations: [
    AuthenticatorComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthenticatorModule { }
