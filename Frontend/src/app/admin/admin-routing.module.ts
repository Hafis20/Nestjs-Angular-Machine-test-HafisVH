import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path:'dashboard', component:DashboardComponent,
      },
      {
        path:'show-users',component:TableComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
