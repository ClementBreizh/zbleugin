import { Component, OnInit } from '@angular/core';
import {ZbleuginAPIService} from '../../services/zbleugin-api.service';
import {Candidate} from '../../models/candidate';
import {MatIconRegistry, MatTableDataSource} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {map, tap} from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Form} from '@angular/forms';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {
  private entityPath = 'candidates';
  private data: {[key: string]: string} = {};
  private firstnameValue: string;
  private lastnameValue: string;
  private emailValue: string;
  private cellPhoneValue: string;
  private homePhoneValue: string;
  private elementsByPage = '20';


  displayedColumns: string[] = ['icon', 'sexCandidate' , 'firstname',
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
    this.getAll(this.entityPath);
  }

  getAll(entityPath) {
    const params = new HttpParams()
      .set('size', this.elementsByPage);

    return this.api.getAll(this.entityPath, params).pipe(map(data => data.content))
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Candidate>(data);
      });
  }

  change(target: any) {
    this.data[target.name] = target.value;
  }

  onSubmit(event: Event) {
    event.preventDefault();

    let r;
    const params = new HttpParams()
      .set('size', this.elementsByPage)
      .set('firstname', this.data.firstname ? this.data.firstname : '')
      .set('lastname', this.data.lastname ? this.data.lastname : '')
      .set('email', this.data.email ? this.data.email : '')
      .set('cellPhone', this.data.cellPhone ? this.data.cellPhone : '')
      .set('homePhone', this.data.homePhone ? this.data.homePhone : '');

    r = this.api.getAll(this.entityPath + '/filtered', params).pipe(map(data => data.content))
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Candidate>(data);
      });

    return r;
  }

  onReset() {
    event.preventDefault();
    this.firstnameValue = '';
    this.lastnameValue = '';
    this.emailValue = '';
    this.cellPhoneValue = '';
    this.homePhoneValue = '';
    this.getAll(this.entityPath);
  }

}
