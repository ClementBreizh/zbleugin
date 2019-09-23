import { Component, OnInit } from '@angular/core';
import {ZbleuginAPIService} from '../../services/zbleugin-api.service';
import {Candidate} from '../../models/candidate';
import {MatIconRegistry, MatTableDataSource, PageEvent, Sort} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpParams} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {
  private entityPath = 'candidates';

  resultNb: number;

  // baseSize = '20';
  // basePage = '0';

  candidatesListForm = this.fb.group({
    firstname:  '',
    lastname: '',
    email: '',
    cellPhone: '',
    homePhone: '',
    page: 0,
    size: 20,
    order_by: 'id',
    order_direction: 'asc'
  });

  displayedColumns: string[] = ['icon', 'sexCandidate', 'firstname',
      'lastname', 'email', 'cellPhone', 'homePhone', 'rankingCandidate', 'statusCandidate'];
  dataSource: MatTableDataSource<Candidate>;

  constructor(private api: ZbleuginAPIService, private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer, private fb: FormBuilder) {
    iconRegistry.addSvgIcon(
      'candidate-folder',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/candidateFolder.svg'));
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.api.getAll(`${this.entityPath}/filtered`, this.params())
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Candidate>(data.content);
        this.resultNb = data.totalElements;
      });
  }

  onSubmit() {
      event.preventDefault();

      this.candidatesListForm.patchValue({
        page: 0
      });

      return this.getAll();
  }

  onReset() {
    event.preventDefault();
    // TODO: A FAIRE
  }

  getAllPageEvent($event: PageEvent) {
    this.candidatesListForm.patchValue({ // Envoi des valeurs dans le formulaire
      page: $event.pageIndex,
      size: $event.pageSize
    });

    this.getAll();
  }

  params() {
    return Object.keys(this.candidatesListForm.controls)
      .filter(k => this.candidatesListForm.value[k] !== '')
      .reduce((acc, k) => ({...acc, [k]: this.candidatesListForm.value[k]}), {});

    // return {
    //   size: this.candidatesListForm.value.size || null,
    //   page: this.candidatesListForm.value.page || null,
    //   order_by: this.candidatesListForm.value.order_by || null,
    //   order_direction: this.candidatesListForm.value.order_direction || null,
    //   firstname: this.candidatesListForm.value.firstname || null,
    //   lastname: this.candidatesListForm.value.lastname || null,
    //   email: this.candidatesListForm.value.email || null,
    //   cellPhone: this.candidatesListForm.value.cellPhone || null,
    //   homePhone: this.candidatesListForm.value.homePhone || null
    // };
  }

/*    setHttpParams(httpParams) {
      return new HttpParams()
        .set('size', this.httpParams.size)
        .set('page', this.httpParams.page)
        .set('order_by', this.httpParams.order_by)
        .set('order_direction', this.httpParams.order_direction)
        .set('firstname', this.httpParams.firstname)
        .set('lastname', this.httpParams.lastname)
        .set('email', this.httpParams.email)
        .set('cellPhone', this.httpParams.cellPhone)
        .set('homePhone', this.httpParams.homePhone);
    }
  }*/
  sortData($event: Sort) {
    if ($event.direction === '') {
      this.candidatesListForm.patchValue({
        order_by: '',
        order_direction: ''
      });
    } else {
      this.candidatesListForm.patchValue({
        order_by: $event.active,
        order_direction: $event.direction
      });
    }

    this.getAll();
  }
}
