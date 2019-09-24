import { OnDestroy, Optional, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

/**
 * @see https://coryrylan.com/blog/building-reusable-forms-in-angular
 */
export abstract class SubForm<T> implements ControlValueAccessor, OnDestroy, OnInit {
  form: FormGroup;
  protected subscriptions: Subscription[] = [];

  constructor(@Optional() protected fb: FormBuilder) { }

  ngOnInit(): void {
    this.subscriptions.push(
      // any time the inner form changes update the parent of any change
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  get value(): T { return this.form.value; }

  set value(value: T) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

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
