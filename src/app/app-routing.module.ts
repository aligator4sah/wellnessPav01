import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';


const appRoutes: Routes = [
  {path: '', redirectTo: '/dashBoard', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashBoard', loadChildren: './layout/dashboard/dashboard.module#DashboardModule'}
];

@NgModule ({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true}
      )
    ],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule {}
