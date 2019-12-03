import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MemberInfoComponent } from './member-info.component';
import { RoutingMemberinfoModule } from './routing-memberinfo.module';
import { DemoMaterialModule } from 'src/app/shared/material.module';



@NgModule({
  declarations: [MemberInfoComponent],
  imports: [
    CommonModule,
    RouterModule,
    DemoMaterialModule,
    RoutingMemberinfoModule
  ]
})
export class MemberInfoModule { }
