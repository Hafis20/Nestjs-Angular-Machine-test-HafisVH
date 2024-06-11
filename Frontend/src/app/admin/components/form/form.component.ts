import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  addUserForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
  }

  submit() {
    console.log(this.addUserForm);
  }
}
