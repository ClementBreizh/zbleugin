import { Component, forwardRef, OnInit } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { SubForm } from '../sub-form';
import { Address } from './../../models/address';

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
export class AddressComponent extends SubForm<Address> implements OnInit {

  ngOnInit(): void {
    this.form = this.fb.group({
      id: '',
      street: ['', Validators.required],
      postalCode: ['', Validators.required],
      city: ['', Validators.required]
    });

    super.ngOnInit();
  }

  get street(): AbstractControl { return this.form.controls.street; }
  get postalCode(): AbstractControl { return this.form.controls.postalCode; }
  get city(): AbstractControl { return this.form.controls.city; }
}
