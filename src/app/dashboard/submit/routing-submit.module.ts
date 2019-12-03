import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SubmitComponent } from './submit.component';
import { SubmitIssueComponent } from './submit-issue/submit-issue.component';

const routes: Routes = [
  {
    path: '',
    component: SubmitComponent,
    children: [
      {
        path: '',
        component: SubmitIssueComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class RoutingSubmitModule { }
