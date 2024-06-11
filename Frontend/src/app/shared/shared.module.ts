import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertBoxComponent } from './components/alert-box/alert-box.component';
import { SharedFormComponent } from './components/shared-form/shared-form.component';


@NgModule({
  declarations: [
    AlertBoxComponent,
    SharedFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    SharedFormComponent,
  ]
})
export class SharedModule { }
