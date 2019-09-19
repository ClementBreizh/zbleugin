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
  }

  ngOnInit() {
    this.getAll(this.entityPath)
      .pipe(map(data => data.content))
      .subscribe(data => {
      this.dataSource = new MatTableDataSource<Candidate>(data);
    });
  }

  getAll(entityPath) {
    return this.api.getAll(this.entityPath);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
