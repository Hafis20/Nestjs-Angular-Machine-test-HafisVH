import { Component, EventEmitter, Input, OnInit, Output, SkipSelf } from '@angular/core';
import { ControlContainer, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emptyValidation } from '../../validations/empty.validation';
import { UserObj } from 'src/app/schemas/user.dto';
import { UserOperationsService } from 'src/app/services/user-operations.service';

@Component({
  selector: 'app-shared-form',
  templateUrl: './shared-form.component.html',
  styleUrls: ['./shared-form.component.css'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: (container: ControlContainer) => container,
      deps: [[new SkipSelf(), ControlContainer]]
    }
  ]
})
export class SharedFormComponent implements OnInit {

  @Input() fromAdd: boolean = false;
  @Input() fromEdit: boolean = false;
  @Input() userData!: UserObj;  // In case of edit user
  @Output() submitEvent: EventEmitter<UserObj> = new EventEmitter<UserObj>();

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, emptyValidation()]],
      email: ['', [Validators.required, Validators.email,]],
      phoneNumber: ['', [Validators.required, emptyValidation()]],
      address: ['', [Validators.required, emptyValidation()]],
    });

    // If user data is available patch the values into edit form
    if (this.userData) {
      this.form.patchValue({
        name: this.userData.name,
        email: this.userData.email,
        phoneNumber: this.userData.phoneNumber,
        address: this.userData.address,
      })
    }

  }

  submit() {
    if(this.form.valid){
      this.submitEvent.emit(this.form.value);
    }
  }
}
