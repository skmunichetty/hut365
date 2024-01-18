import { AuthGuard } from './auth/auth-guard/auth-guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { AdminGuard } from './auth/auth-guard/admin-guard';

import { BodyComponent }  from './components/body/body.component'
import { CoupensComponent }  from './components/coupens/coupens.component'
import { DashboardComponent }  from './components/dashboard/dashboard.component'
import { MediaComponent }  from './components/media/media.component'
import { PagesComponent }  from './components/pages/pages.component'
import { ProductsComponent }  from './components/products/products.component'
import { SettingsComponent }  from './components/settings/settings.component'
import { SidenavComponent }  from './components/sidenav/sidenav.component'
import { StatisticsComponent }  from './components/statistics/statistics.component'

const routes: Routes = [
  // {path:'',redirectTo:'/auth/login',pathMatch:'full'},
  // {
  //   path: 'auth', component: AuthComponent,
  //   children: [
  //     { path: 'login', component: LoginComponent }
  //   ]
  // },
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'error', component: ErrorComponent },

  {path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'products', component: ProductsComponent },
  {path: 'statistics', component: StatisticsComponent },
  {path: 'coupens', component: CoupensComponent },
  {path: 'pages', component: PagesComponent },
  {path: 'media', component: MediaComponent },
  {path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
