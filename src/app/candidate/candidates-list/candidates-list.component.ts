import { Component, OnInit } from '@angular/core';
import {ZbleuginAPIService} from '../../services/zbleugin-api.service';
import {Candidate} from '../../models/candidate';
import {MatIconRegistry, MatTableDataSource} from '@angular/material';
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

  baseSize = '20';
  basePage = '0';

  candidatesListForm = this.fb.group({
      firstname:  [''],
      lastname: [''],
      email: [''],
      cellPhone: [''],
      homePhone: ['']
    });

  httpParams: any;

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
    this.getAll(this.httpParams);
  }

  getAll(httpParams) {

    return this.api.getAll(this.entityPath, this.setParams())
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Candidate>(data.content);
        this.resultNb = data.totalElements;
      });
  }

onSubmit() {
    event.preventDefault();

    return this.getAll(this.httpParams);
  }

onReset() {
    // event.preventDefault();
    //
    // this.resetParamsData();
    //
    // this.getAll();
  }

  private resetParamsData() {
    // this.data = {};
    // this.httpParams.page = '';
  }

getAllPageEvent($event) {
    // this.httpParams.size = $event.pageSize;
    // this.httpParams.page = $event.pageIndex;
    //
    // this.getAll();
  }

  setParams() {
    this.httpParams = {
      size: this.candidatesListForm.value.size || this.baseSize,
      page: this.candidatesListForm.value.basePage || this.basePage,
      order_by: this.candidatesListForm.value.order_by || '',
      order_direction: this.candidatesListForm.value.order_direction || '',
      firstname: this.candidatesListForm.value.firstname || '',
      lastname: this.candidatesListForm.value.lastname || '',
      email: this.candidatesListForm.value.email || '',
      cellPhone: this.candidatesListForm.value.cellPhone || '',
      homePhone: this.candidatesListForm.value.homePhone || ''
    };
  }

    setHttpParams(httpParams) {
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
  }
}
