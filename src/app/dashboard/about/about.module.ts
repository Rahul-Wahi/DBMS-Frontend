import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { RoutingAboutModule } from './routing-about.module';
import { DemoMaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule,
    RoutingAboutModule
  ]
})
export class AboutModule { }
