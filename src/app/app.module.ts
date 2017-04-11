import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing, appRoutingProviders} from "./app.routes";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {AuthService} from "../service/service.auth";
import {RestService} from "../service/service.rest";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing

  ],
  providers: [AuthService,RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

