import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserObj } from 'src/app/schemas/user.dto';
import { UserOperationsService } from 'src/app/services/user-operations.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private userService: UserOperationsService) { }

  ngOnInit(): void { }

  add(formData: UserObj) {
    this.userService.addUser(formData).subscribe({
      next: (res) => {
        console.log(res);
      }
    })
  }

}
