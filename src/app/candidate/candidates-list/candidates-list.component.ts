import { Component, OnInit } from '@angular/core';
import {ZbleuginAPIService} from '../../services/zbleugin-api.service';
import {Candidate} from '../../models/candidate';
import {MatIconRegistry, MatTableDataSource} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {
  private candidates: Candidate[];
  private entityPath = 'candidates';

  private displayedColumns: string[] = ['icon', 'firstname', 'lastname', 'email', 'cellPhone', 'homePhone', 'rankingCandidate'];
  private dataSource;

  constructor(private api: ZbleuginAPIService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'candidate-folder',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/candidateFolder.svg'));
  }

  ngOnInit() {
    this.getAll(this.entityPath);
    this.dataSource = new MatTableDataSource(this.candidates);
  }

  getAll(entityPath) {
    this.api.getAll(this.entityPath).subscribe(data => {
      this.candidates = data;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
