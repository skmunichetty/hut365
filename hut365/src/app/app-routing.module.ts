import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
