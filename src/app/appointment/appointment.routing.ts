import { Routes } from '@angular/router';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';

export const routes: Routes = [{
  path: 'list',
  component: AppointmentListComponent
}, {
  path: 'create',
  component: AppointmentFormComponent
}, {
  path: ':id',
  children: [{
    path: '',
    pathMatch: 'full',
    component: AppointmentDetailsComponent
  }, {
    path: 'edit',
    component: AppointmentFormComponent
  }]
}];
