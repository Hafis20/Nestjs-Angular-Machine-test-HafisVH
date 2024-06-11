import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  // when the user click on add user
  openAddUserDialog() {
    this.dialog.open(FormComponent);
  }
}
