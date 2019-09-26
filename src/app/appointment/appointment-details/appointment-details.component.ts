import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentApiService } from 'src/app/services/appointment-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {

  appointment: Appointment;


  constructor(private api: AppointmentApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.api
          .getOne(params.id)
          .subscribe((value: Appointment) => {
            this.appointment = value;
          });
      }
    });
  }
}
