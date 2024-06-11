import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
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
    private dialog :MatDialog
  ) { }

  ngOnInit(): void {
    this.userId = this.data;
  }

  delete() {
    console.log('deleting')
    this.userSevice.deleteUser({ _id: this.userId }).subscribe({
      next: (res) => {
        console.log(res);
        this.userSevice.setAnyChangeOccur(true);
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        // Close the all dialog boxes
        this.dialog.closeAll();
      }
    })
  }
}
