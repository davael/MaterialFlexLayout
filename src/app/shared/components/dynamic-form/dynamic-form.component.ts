import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  dynamicFormGroup!: FormGroup;
  // eslint-disable-next-line @typescript-eslint/ban-types
  @Input() model!: {};

  fields = [];

  constructor() {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  getFormControlsFields() {
    const formGroupFields = {};
    for (const field of Object.keys(this.model)) {
      formGroupFields[field] = new FormControl('');
    }
    return formGroupFields;
  }
}
