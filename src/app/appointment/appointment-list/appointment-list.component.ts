import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentApiService } from 'src/app/services/appointment-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder } from '@angular/forms';
import { MatIconRegistry, Sort, PageEvent, DateAdapter } from '@angular/material';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

    displayedColumns = ['date', 'organizer', 'type', 'actions'];

    dataSource: Appointment[];

    resultNb: number;

    appointmentsListForm = this.fb.group({
      id: '',
      appointmentDate:  '',
      organizer: '',
      appointmentType: '',
      page: 0,
      size: 20,
      sort: ''
    });

    constructor(private api: AppointmentApiService, private iconRegistry: MatIconRegistry,
                private sanitizer: DomSanitizer, private fb: FormBuilder, private adapter: DateAdapter<any>) {
      iconRegistry.addSvgIcon(
          'search',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
      iconRegistry.addSvgIcon(
          'show',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/show.svg'));
      iconRegistry.addSvgIcon(
          'edit',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
      iconRegistry.addSvgIcon(
          'delete',
          sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
    }

    ngOnInit() {
      this.refresh();
      this.adapter.setLocale('fr');
    }

    onDelete(appointment: Appointment): void {
      if (confirm('Êtes-vous sûr de vouloir supprimer ' + appointment.id)) {
        this.api
            .deleteOne(appointment.id)
            .subscribe(_ => this.refresh()); // TODO: Use notification to show success OR failure.
      }
    }

    private refresh() {
      this.api
      .getAll(this.params())
      .subscribe(data => {
        this.dataSource = data.content;
        this.resultNb = data.totalElements;
        console.log(this.dataSource);
      });
    }
    onSubmit($event) {
      $event.preventDefault();

      this.appointmentsListForm.patchValue({
        page: 0
      });
      this.refresh();
    }

    // Reset appointmentListForm all values for httpPrams but elements number & sorting.
    onReset($event) {
      $event.preventDefault();

      this.appointmentsListForm.patchValue({
        id: '',
        appointmentDate:  '',
        organizer: '',
        appointmentType: '',
        page: 0
        }
      );

      this.refresh();
    }

    pageEvent($event: PageEvent) {
      this.appointmentsListForm.patchValue({
        page: $event.pageIndex,
        size: $event.pageSize
      });

      this.refresh();
    }

    params() {
      const res: any = Object.keys(this.appointmentsListForm.controls)
        .filter(k => this.appointmentsListForm.value[k])
        .reduce((acc, k) => ({...acc, [k]: this.appointmentsListForm.value[k]}), {});

      if (typeof res.appointmentDate !== typeof undefined) {
        res.appointmentDate = this.convertDate(res.appointmentDate);
      }

      return res;
    }

    sortData($event: Sort) {
      if ($event.direction === '') {
        this.appointmentsListForm.patchValue({
          sort: ''
        });
      } else {
        this.appointmentsListForm.patchValue({
          sort: $event.active + ',' + $event.direction
        });
      }

      this.refresh();
    }

    private convertDate(date: Date): string {
      return new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
    }
  }

