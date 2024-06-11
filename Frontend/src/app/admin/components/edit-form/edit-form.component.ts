import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserObj } from 'src/app/schemas/user.dto';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: UserObj) { }

  userData!:UserObj;

  ngOnInit(): void {
    this.userData = this.data;
  }
}
