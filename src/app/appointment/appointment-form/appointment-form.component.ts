import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Person } from 'src/app/models/person';
import { Address } from 'src/app/models/address';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentApiService } from 'src/app/services/appointment-api.service';
import { Appointment } from 'src/app/models/appointment';
import { tap } from 'rxjs/operators';
import { PersonApiService } from 'src/app/services/person-api.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  id: number = null;
  organizerChoice: Person[] = [];
  editedAppointment: Appointment;

  form = this.fb.group({
    // id: null,
    date: ['', Validators.required],
    type: '',
    organizer: ['', Validators.required],
    apeCode: '',
    //Persons: Person[],
    address: Address
  });

  private time;
  data: {content: any[], totalElements: number} = null;

  constructor(
      private readonly fb: FormBuilder,
      private readonly route: ActivatedRoute,
      private readonly api: AppointmentApiService,
      private readonly papi: PersonApiService,
      private readonly router: Router) { }

  ngOnInit() {
    this.treatParameters();

    this.form.get('organizer')
        .valueChanges
        .subscribe(value => {
          this.data = null;
          if (this.time) { window.clearTimeout(this.time); }

          this.time = window.setTimeout(() => {
            this.papi
                .find(value)
                .subscribe(d => this.data = d);
          }, 1500);
        });
  }

  get isNew(): boolean { return this.id === null; }

  onSubmit() {
    const appointment: Appointment = this.form.value;

    let request = null;

    if (this.isNew) {
      request = this.api.create(appointment).subscribe(data => {
        this.editedAppointment = data;
        this.router.navigate(['appointment', this.editedAppointment.id]);
      });
    } else {
      // TODO: Recupérer le candidat, l'editer, et l'envoyer.

      request = this.api.edit(this.id, appointment).subscribe(data => {
        this.editedAppointment = data;
        console.log(this.editedAppointment);
        this.router.navigate(['appointment', this.editedAppointment.id]);
      });
    }

  }

  /** Initializes from route parameters. */
  private treatParameters() {
    this.route
      .params
      .subscribe(params => {
        // FIXME: Should manage not found (interceptor).
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
