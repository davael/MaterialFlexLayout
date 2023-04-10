import {Component, EventEmitter, Input, Output, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.component.html',
  styleUrls: ['./combobox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ComboboxComponent),
      multi: true,
    },
  ],
})
export class ComboboxComponent implements ControlValueAccessor {
  @Input() disabled = false;
  @Input() options: Array<any> = [];
  @Output() onchange = new EventEmitter();
  _label = 'Seleccione';
  _value = null;
  _openOptions = false;

  get value(): any {
    return this._value;
  }

  onSelect(data: any) {
    this._label = data.label;
    this._value = data.value;
    this.onChange(this.value);
    this.onchange.emit(this._value);
    this._openOptions = false;
  }
  onChange = (value: any) => {
    this._value = value;
  };
  onTouched = () => {};
  writeValue(value: any): void {
    this._value = value;
    this.onChange(this._value);
  }
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
