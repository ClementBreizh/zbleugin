import { Address } from './../../models/address';
import { Component, OnInit, forwardRef, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormBuilder, Validators, ControlValueAccessor, FormControl, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

/**
 * @see https://coryrylan.com/blog/building-reusable-forms-in-angular
 */
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => AddressComponent),
    multi: true
  }, {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => AddressComponent),
    multi: true
  }]
})
export class AddressComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];

  constructor(private fb: FormBuilder) {
      // create the inner form
      this.form = this.fb.group({
        id: '',
        street: ['', Validators.required],
        postalCode: ['', Validators.required],
        city: ['', Validators.required]
      });

      this.subscriptions.push(
        // any time the inner form changes update the parent of any change
        this.form.valueChanges.subscribe(value => {
          this.onChange(value);
          this.onTouched();
        })
      );
  }

  get value(): Address { return this.form.value; }

  set value(value: Address) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  get street(): AbstractControl { return this.form.controls.street; }
  get postalCode(): AbstractControl { return this.form.controls.postalCode; }
  get city(): AbstractControl { return this.form.controls.city; }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  // communicate the inner form validation to the parent form
  validate(_: FormControl) {
    return this.form.valid ? null : { profile: { valid: false, }, };
  }
}
