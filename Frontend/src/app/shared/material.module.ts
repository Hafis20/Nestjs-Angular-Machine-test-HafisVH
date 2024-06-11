import { NgModule } from "@angular/core";

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatTableModule,
        MatCardModule,
        MatPaginatorModule
    ]
})
export class MaterialModule { }