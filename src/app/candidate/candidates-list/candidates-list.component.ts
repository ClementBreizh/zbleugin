import { Component, OnInit } from '@angular/core';
import {ZbleuginAPIService} from '../../services/zbleugin-api.service';
import {Candidate} from '../../models/candidate';
import {MatIconRegistry, MatTableDataSource} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {
  private entityPath = 'candidates';

  displayedColumns: string[] = ['icon', 'sexCandidate' , 'firstname',
    'lastname', 'email', 'cellPhone', 'homePhone', 'rankingCandidate', 'statusCandidate'];
  dataSource: MatTableDataSource<Candidate>;

  constructor(private api: ZbleuginAPIService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
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
    return this.api.getAll(this.entityPath).pipe(map(data => data.content))
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Candidate>(data);
      });
  }

  checkFilter(value) {
    if (!value) {
      this.getAll(this.entityPath);
    } else {
      this.applyFilterAsync(value);
    }
  }

  applyFilterAsync(value) {
    console.log('Send request ...');
    return this.api.getAll(this.entityPath + '/filtered?lastname=' + value).pipe(map(data => data.content))
      .subscribe(data => {
        this.dataSource = new MatTableDataSource<Candidate>(data);
      });

  }

}
