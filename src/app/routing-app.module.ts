import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  // {
  //   path: '', redirectTo: 'home', pathMatch: 'full',
  // },
  {
    path: '', redirectTo: 'authenticator', pathMatch: 'full'
  },
  {
    path: 'authenticator', loadChildren: () => import('./authenticator/authenticator.module').then(m => m.AuthenticatorModule)
  },
  {
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  }
  // {
  //   path: 'feed', loadChildren: () => import('./feed/feed.module').then(module => module.FeedModule)
  // },
  // {
  //   path: 'submit', loadChildren: () => import('./submit/submit.module').then(module => module.SubmitModule)
  // },
  // {
  //   path: 'leaderboard', loadChildren: () => import('./leaderboard/leaderboard.module').then(module => module.LeaderboardModule)
  // },
  // {
  //   path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule)
  // },
  // {
  //   path: '**', component: AppComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
  ]
})
export class AppRoutingModule { }
