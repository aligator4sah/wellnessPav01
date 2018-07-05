import {DashboardComponent} from './dashboard.component';

export const dashboardRoutes = [{
  path: '',
  component: DashboardComponent,
  children: [
    {path: '', redirectTo: 'patient-table', pathMatch: 'full'},
    {path: 'patient-table', loadChildren: './patient-table/patient-table.module#PatientTableModule'},
    {path: 'create-demographic', loadChildren: './create-demographic/create-demographic.module#CreateDemographicModule'},
    {path: 'patient-home/:id', loadChildren: './patient-home/patient-home.module#PatientHomeModule'},
    {path: 'patient-demographic', loadChildren: './patient-demographic/patient-demographic.module#PatientDemographicModule'},
    {path: 'encounter-table', loadChildren: './encounter-table/encounter-table.module#EncounterTableModule'},
    {path: 'create-encounter', loadChildren: './create-encounter/create-encounter.module#CreateEncounterModule'},
    {path: 'create-p-appointment', loadChildren: './create-p-appointment/create-p-appointment.module#CreatePAppointmentModule'},
    {path: 'clinician-schedule', loadChildren: './clinician-schedule/clinician-schedule.module#ClinicianScheduleModule'}
  ],
}];
