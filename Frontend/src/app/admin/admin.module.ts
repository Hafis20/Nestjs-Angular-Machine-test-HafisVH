import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormComponent } from './components/form/form.component';
import { TableComponent } from './components/table/table.component';
import { AddUserDialogComponent } from './components/add-user-dialog/add-user-dialog.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    FormComponent,
    TableComponent,
    AddUserDialogComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    CoreModule,
  ]
})
export class AdminModule { }
