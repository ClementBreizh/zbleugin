import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppointmentApiService } from 'src/app/services/appointment-api.service';
import { Appointment } from 'src/app/models/appointment';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  id: number = null;

  form = this.fb.group({
    appointmentDate: ['', Validators.required],
    appointmentType: '',
    informations: '',
    report:'',
    status:'',
    persons: [],
    organizer: ['', Validators.required]
  });


  constructor(
      private readonly fb: FormBuilder,
      private readonly route: ActivatedRoute,
      private readonly api: AppointmentApiService) { }

  ngOnInit() {
    this.treatParameters();
  }

  get isNew(): boolean { return this.id === null; }

  get name(): AbstractControl { return this.form.controls.name; }
  get siret(): AbstractControl { return this.form.controls.siret; }

  onSubmit() {
    const appointment: Appointment = this.form.value;

    console.log('Valid');
  }

  private treatParameters() {
    this.route
      .params
      .subscribe(params => {
        if (params.id) {
          this
            .api
            .getOne(params.id)
            .pipe(tap(e => this.id = e.id))
            .subscribe(e => this.form.patchValue(e));
        }
      });
  }
}
