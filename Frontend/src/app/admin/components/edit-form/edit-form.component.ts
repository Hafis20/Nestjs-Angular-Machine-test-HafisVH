import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserObj } from 'src/app/schemas/user.dto';
import { UserOperationsService } from 'src/app/services/user-operations.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserObj,
    private userService: UserOperationsService
  ) { }

  userData!: UserObj;

  ngOnInit(): void {
    this.userData = this.data;
  }

  // User clicked on edit button 
  edit(data: UserObj) {
    let user: UserObj = {
      _id: this.userData._id,
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      address: data.address,
    }

    this.userService.editUser(user).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }
}
