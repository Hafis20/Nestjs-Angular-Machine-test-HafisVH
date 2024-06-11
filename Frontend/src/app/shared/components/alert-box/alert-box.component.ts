import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserOperationsService } from 'src/app/services/user-operations.service';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

  userId!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: string,
    private userSevice: UserOperationsService,
  ) { }

  ngOnInit(): void {
    this.userId = this.data;
  }

  delete() {
    console.log('deleting')
    this.userSevice.deleteUser({ userId: this.userId }).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }
}
