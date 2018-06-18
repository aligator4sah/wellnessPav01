import {DashboardComponent} from './dashboard.component';

export const dashboardRoutes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {path: '', redirectTo: 'patient-table', pathMatch: 'full'},
    {path: 'patient-table', loadChildren: './patient-table/patient-table.module#PatientTableModule'},
    {path: 'create-demographic', loadChildren: './create-demographic/create-demographic.module#CreateDemographicModule'},
    {path: 'patient-home/:id', loadChildren: './patient-home/patient-home.module#PatientHomeModule'}
  ],
}];
