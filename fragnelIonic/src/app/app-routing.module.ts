import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardTempComponent } from './dashboard-temp/dashboard-temp.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboardtemp', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path:'dashboard',component:DashboardComponent},
  { path:'login',component:LoginComponent},
  { path:'register', component:RegisterComponent},
  { path:'dashboardtemp', component:DashboardTempComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
