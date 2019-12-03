import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from 'src/app/shared/material.module';
import { RoutingAdminModule } from './routing-admin.module';



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule,
    RoutingAdminModule
  ]
})
export class AdminModule { }
