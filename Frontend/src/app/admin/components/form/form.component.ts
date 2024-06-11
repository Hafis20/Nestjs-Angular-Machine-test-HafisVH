import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emptyValidation } from 'src/app/shared/validations/empty.validation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  addUserForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name: ['', [Validators.required, emptyValidation()]],
      email: ['', [Validators.required, Validators.email,]],
      phoneNumber: ['', [Validators.required, emptyValidation()]],
      address: ['', [Validators.required, emptyValidation()]],
    });
  }

  submit() {
    console.log(this.addUserForm);
  }
}
