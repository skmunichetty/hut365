import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './shared/auth.service';
import { UserService } from './shared/user.service';
import { AdminService } from './shared/admin.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './auth/auth-guard/auth.interceptor';

import { BodyComponent }  from './components/body/body.component'
import { CoupensComponent }  from './components/coupens/coupens.component'
import { DashboardComponent }  from './components/dashboard/dashboard.component'
import { MediaComponent }  from './components/media/media.component'
import { PagesComponent }  from './components/pages/pages.component'
import { ProductsComponent }  from './components/products/products.component'
import { SettingsComponent }  from './components/settings/settings.component'
import { SidenavComponent }  from './components/sidenav/sidenav.component'
import { StatisticsComponent }  from './components/statistics/statistics.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    ErrorComponent,

    // Components
    BodyComponent,
    CoupensComponent,
    DashboardComponent,
    MediaComponent,
    PagesComponent,
    ProductsComponent,
    SettingsComponent,
    SidenavComponent,
    
    StatisticsComponent

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
  providers: [AuthService, 
    AdminService, 
    UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
