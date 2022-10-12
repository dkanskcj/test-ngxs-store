import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from '../auth/state/logged-in.guard';
import { NoSoupForYouComponent } from '../pages/no-soup-for-you/no-soup-for-you.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about-us',
    canActivate: [LoggedInGuard],
    loadChildren: () => import('../pages/about-us/about-us.module').then(m=>m.AboutUsModule)
  },
  {
    path: 'firstPage',
    loadChildren: () => import('../pages/first-page/first-page.module').then(m=>m.FirstPageModule)
  },
  {
    path: 'no-soup-for-you',
    component: NoSoupForYouComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
