import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MemberInfoComponent } from './member-info.component';

const routes: Routes = [
  {
    path: '',
    component: MemberInfoComponent
  },
  // {
  //   path: 'Feed',
  //   component: FeedComponent
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoutingMemberinfoModule { }
