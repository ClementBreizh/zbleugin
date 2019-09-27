import { Component, OnInit } from '@angular/core';
import {MatIconRegistry, PageEvent, Sort} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder} from '@angular/forms';
import {PersonApiService} from '../../services/person-api.service';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  displayedColumns: string[] = ['firstname',
    'lastname', 'email', 'cellPhone', 'homePhone', 'actions'];

  dataSource: Person[];

  // private entityPath = 'persons

  resultNb: number;

  personsListForm = this.fb.group({
    firstname:  '',
    lastname: '',
    email: '',
    cellPhone: '',
    homePhone: '',
    page: 0,
    size: 20,
    sort: ''
  });

  constructor(private api: PersonApiService, private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer, private fb: FormBuilder) {
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
    iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
  }

  ngOnInit() {
    this.refresh();
  }

  onDelete(person: Person): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ' + person.firstname + ' ' + person.lastname + '?')) {
      this.api
        .deleteOne(person.id)
        .subscribe(_ => this.refresh()); // TODO: Use notification to show success OR failure.
    }
  }

  private refresh() {
    // Provoque le rechargement du tableau
    // this.dataSource = null;
    this.api
      .getAll(this.params())
      .subscribe(data => {
        this.dataSource = data.content;
        this.resultNb = data.totalElements;
      });
  }

  onSubmit($event) {
    $event.preventDefault();

    this.personsListForm.patchValue({
      page: 0
    });

    return this.refresh();
  }

  // Reset persons
  // ListForm all values for httpPrams but elements number & sorting.
  onReset($event) {
    $event.preventDefault();

    this.personsListForm.patchValue({
        firstname: '',
        lastname: '',
        email: '',
        cellPhone: '',
        homePhone: '',
        page: 0
      }
    );

    this.refresh();
  }

  pageEvent($event: PageEvent) {
    this.personsListForm.patchValue({
      page: $event.pageIndex,
      size: $event.pageSize
    });

    this.refresh();
  }

  params() {
    return Object.keys(this.personsListForm.controls)
      .filter(k => this.personsListForm.value[k] !== '')
      .reduce((acc, k) => ({...acc, [k]: this.personsListForm.value[k]}), {});
  }

  sortData($event: Sort) {
    if ($event.direction === '') {
      this.personsListForm.patchValue({
        sort: ''
      });
    } else {
      this.personsListForm.patchValue({
        sort: $event.active + ',' + $event.direction
      });
    }

    this.refresh();
  }
}
