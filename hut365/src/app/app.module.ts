import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BodyComponent }  from './components/body/body.component'
import { CoupensComponent }  from './components/coupens/coupens.component'
import { DashboardComponent }  from './components/dashboard/dashboard.component'
import { MediaComponent }  from './components/media/media.component'
import { PagesComponent }  from './components/pages/pages.component'
import { ProductsComponent }  from './components/products/products.component'
import { SettingsComponent }  from './components/settings/settings.component'
import { SidenavComponent }  from './components/sidenav/sidenav.component'
import { StatisticsComponent }  from './components/statistics/statistics.component';
import { TopnavComponent } from './components/topnav/topnav.component'

@NgModule({
  declarations: [
    AppComponent,

    // Components
    BodyComponent,
    CoupensComponent,
    DashboardComponent,
    MediaComponent,
    PagesComponent,
    ProductsComponent,
    SettingsComponent,
    SidenavComponent,
    
    StatisticsComponent,
          TopnavComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
