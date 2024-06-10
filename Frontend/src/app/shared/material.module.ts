import { NgModule } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatDialogModule,
    ]
})
export class MaterialModule { }