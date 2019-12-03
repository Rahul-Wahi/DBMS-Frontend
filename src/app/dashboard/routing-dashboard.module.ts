import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SubmitComponent } from './submit/submit.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
        {
            path: '',
            component: HomeComponent
        },
        {
            path: 'about',
            loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
        },
        {
            path: 'memberinfo',
            loadChildren: () => import('./member-info/member-info.module').then(m => m.MemberInfoModule),
        },
        {
            path: 'submit',
            loadChildren: () => import('./submit/submit.module').then(m => m.SubmitModule)
        },
        {
            path: 'admin',
            loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
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
  exports: [ RouterModule ]
})
export class RoutingDashboardModule { }
