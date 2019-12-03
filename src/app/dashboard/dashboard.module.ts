import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingDashboardModule } from './routing-dashboard.module';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard.component';
import { DemoMaterialModule } from '../shared/material.module';
import { RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';
import { SubmitModule } from './submit/submit.module';
import { AboutModule } from './about/about.module';
import { MemberInfoModule } from './member-info/member-info.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    DemoMaterialModule,
    RoutingDashboardModule,
    HomeModule,
    SubmitModule,
    AboutModule,
    MemberInfoModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
