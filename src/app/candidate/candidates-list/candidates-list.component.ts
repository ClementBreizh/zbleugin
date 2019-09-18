import { Component, OnInit } from '@angular/core';
import {ZbleuginAPIService} from '../../services/zbleugin-api.service';
import {Candidate} from '../../models/candidate';
import {Generic} from '../../models/generic';


@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.css']
})
export class CandidatesListComponent implements OnInit {
  candidates: Candidate[];
  private entityPath = 'candidates';

  constructor(private api: ZbleuginAPIService) { }

  ngOnInit() {
    // this.getAll(this.entityPath);
    this.getAll(this.entityPath);
  }

  getAll(entityPath) {
    this.api.getAll(this.entityPath).subscribe(data => {
      this.candidates = data;
    });
  }

}
