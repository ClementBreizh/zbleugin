import { Component, OnInit } from '@angular/core';
import {Candidate} from '../../models/candidate';
import {MatIconRegistry, PageEvent, Sort} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder} from '@angular/forms';
import {CandidateApiService} from '../../services/candidate-api.service';

@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  displayedColumns: string[] = ['sexCandidate', 'firstname',
    'lastname', 'email', 'cellPhone', 'homePhone', 'rankingCandidate', 'statusCandidate', 'actions'];

  dataSource: Candidate[];

  // private entityPath = 'candidates';

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

  constructor(private api: CandidateApiService, private iconRegistry: MatIconRegistry,
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
    this.refresh();
  }

  onDelete(candidate: Candidate): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ' + candidate.firstname + ' ' + candidate.lastname + '?')) {
      this.api
        .deleteOne(candidate.id)
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

    this.candidatesListForm.patchValue({
      page: 0
    });

    return this.refresh();
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

    this.refresh();
  }

  pageEvent($event: PageEvent) {
    this.candidatesListForm.patchValue({
      page: $event.pageIndex,
      size: $event.pageSize
    });

    this.refresh();
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

    this.refresh();
  }
}
