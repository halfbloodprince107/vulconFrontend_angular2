/**
 * Created by consultadd on 17/11/16.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component"
import {MainComponent} from "./main/main.component"



/*
 export  function loadMovie(){
 return  require('es6-promise!./+movie/movie.module')('MovieModule');
 }
 {path: '', redirectTo: '/movies',pathMatch: 'full'},

 */


export const routes: Routes = [



  {path: '',component:LoginComponent},
  {path: 'dashboard',component:MainComponent, children:[
    {path: '', component: DashboardComponent},

  ]},


];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
