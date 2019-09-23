import { Component, OnInit } from '@angular/core';
import {ZbleuginAPIService} from '../../services/zbleugin-api.service';
import {Candidate} from '../../models/candidate';
import {MatIconRegistry, MatTableDataSource} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpParams} from '@angular/common/http';


@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {
  private entityPath = 'candidates';
  private data: { [key: string]: string } = {};
  private firstnameValue: string;
  private lastnameValue: string;
  private emailValue: string;
  private cellPhoneValue: string;
  private homePhoneValue: string;
  resultNb: number;

  baseSize = '20';
  basePage = '0';

  httpParamsSetted = {
    size: this.baseSize,
    page: this.basePage,
    order_by: '',
    order_direction: '',
    firstname: '',
    lastname: '',
    email: '',
    cellPhone: '',
    homePhone: ''
  };

  displayedColumns: string[] = ['icon', 'sexCandidate', 'firstname',
    'lastname', 'email', 'cellPhone', 'homePhone', 'rankingCandidate', 'statusCandidate'];
  dataSource: MatTableDataSource<Candidate>;

  constructor(private api: ZbleuginAPIService, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {
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

    // Set params
    this.httpParamsSetted = {
      size : this.httpParamsSetted.size || this.baseSize,
      page: this.httpParamsSetted.page || this.basePage,
      order_by: this.httpParamsSetted.order_by || '',
      order_direction: this.httpParamsSetted.order_direction || '',
      firstname: this.data.firstname || '',
      lastname: this.data.lastname || '',
      email: this.data.email || '',
      cellPhone: this.data.cellPhone || '',
      homePhone: this.data.homePhone || ''
    };

    const params = new HttpParams()
      .set('size', this.httpParamsSetted.size)
      .set('page', this.httpParamsSetted.page )
      .set('order_by', this.httpParamsSetted.order_by)
      .set('order_direction', this.httpParamsSetted.order_direction);

    return this.api.getAll(this.entityPath, params)/*.pipe(map(data => data.content))*/
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Candidate>(data.content);
        this.resultNb = data.totalElements;
      });
  }

  change(target: any) {
    this.data[target.name] = target.value;
  }

  onSubmit(event: Event) {
    event.preventDefault();

    // Set params
    this.httpParamsSetted = {
      size : this.httpParamsSetted.size || this.baseSize,
      page: this.basePage,
      order_by: this.httpParamsSetted.order_by || '',
      order_direction: this.httpParamsSetted.order_direction || '',
      firstname: this.data.firstname || '',
      lastname: this.data.lastname || '',
      email: this.data.email || '',
      cellPhone: this.data.cellPhone || '',
      homePhone: this.data.homePhone || ''
    };

    const params = new HttpParams()
      .set('size', this.httpParamsSetted.size)
      .set('page', this.httpParamsSetted.page)
      .set('order_by', this.httpParamsSetted.order_by)
      .set('order_direction', this.httpParamsSetted.order_direction)
      .set('firstname', this.httpParamsSetted.firstname)
      .set('lastname', this.httpParamsSetted.lastname)
      .set('email', this.httpParamsSetted.email)
      .set('cellPhone', this.httpParamsSetted.cellPhone)
      .set('homePhone', this.httpParamsSetted.homePhone);

    return this.api.getAll(this.entityPath + '/filtered', params)/*.pipe(map(data => data.content))*/
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Candidate>(data.content);
        this.resultNb = data.totalElements;
      });
  }

  onReset() {
    event.preventDefault();

    this.firstnameValue = '';
    this.lastnameValue = '';
    this.emailValue = '';
    this.cellPhoneValue = '';
    this.homePhoneValue = '';

    this.resetParamsData();

    this.getAll();
  }

  private resetParamsData() {
    this.data = {};
    this.httpParamsSetted.page = '';
  }

  getAllPageEvent($event) {
    this.httpParamsSetted.size = $event.pageSize;
    this.httpParamsSetted.page = $event.pageIndex;

    this.getAll();
  }
}
