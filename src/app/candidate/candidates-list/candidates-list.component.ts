import { Component, OnInit } from '@angular/core';
import {ZbleuginAPIService} from '../../services/zbleugin-api.service';
import {Candidate} from '../../models/candidate';
import {MatIconRegistry, MatTableDataSource, PageEvent, Sort} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {
  private entityPath = 'candidates';

  resultNb: number;

  candidatesListForm = this.fb.group({
    firstname:  '',
    lastname: '',
    email: '',
    cellPhone: '',
    homePhone: '',
    page: 0,
    size: 20,
    sort: ''
  });

  displayedColumns: string[] = ['sexCandidate', 'firstname',
      'lastname', 'email', 'cellPhone', 'homePhone', 'rankingCandidate', 'statusCandidate', 'actions'];
  dataSource: MatTableDataSource<Candidate>;

  constructor(private api: ZbleuginAPIService, private iconRegistry: MatIconRegistry,
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

  onSubmit($event) {
    $event.preventDefault();

    this.candidatesListForm.patchValue({
      page: 0
    });

    return this.getAll();
  }

  // Reset candidatesListForm all values for httpPrams but elements number & sorting.
  onReset() {
    event.preventDefault();

    this.candidatesListForm.patchValue({
        firstname: '',
        lastname: '',
        email: '',
        cellPhone: '',
        homePhone: '',
        page: 0
      }
    );

    this.getAll();
  }

  getAllPageEvent($event: PageEvent) {
    this.candidatesListForm.patchValue({
      page: $event.pageIndex,
      size: $event.pageSize
    });

    this.getAll();
  }

  params() {
    return Object.keys(this.candidatesListForm.controls)
      .filter(k => this.candidatesListForm.value[k] !== '')
      .reduce((acc, k) => ({...acc, [k]: this.candidatesListForm.value[k]}), {});
  }

  sortData($event: Sort) {
    if ($event.direction === '') {
      this.candidatesListForm.patchValue({
        sort: ''
      });
    } else {
      this.candidatesListForm.patchValue({
        sort: $event.active + ',' + $event.direction
      });
    }

    this.getAll();
  }
}
