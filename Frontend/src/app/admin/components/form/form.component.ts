import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserObj } from 'src/app/schemas/user.dto';
import { MessageService } from 'src/app/services/message.service';
import { UserOperationsService } from 'src/app/services/user-operations.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private userService: UserOperationsService,
    private dialog:MatDialog,
    private toastr:MessageService
  ) { }

  ngOnInit(): void { }

  add(formData: UserObj) {
    this.userService.addUser(formData).subscribe({
      next: (res) => {
        console.log(res);
        this.toastr.showSuccess('Successfully Added');
        this.userService.setAnyChangeOccur(true);
      },
      complete:()=>{
        this.dialog.closeAll();
      }
    })
  }

}
