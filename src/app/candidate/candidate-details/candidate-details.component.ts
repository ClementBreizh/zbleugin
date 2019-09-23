import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ZbleuginAPIService} from '../../services/zbleugin-api.service';
import {Candidate} from '../../models/candidate';
import {Session} from '../../models/session';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  candidate: Candidate;

  private entityPath = 'candidates';
  private actualSession: Session;

  constructor(private api: ZbleuginAPIService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOne(this.entityPath);
  }

  getOne(entityPath) {
    this.route
      .params
      .subscribe(param => {
        if (param.id) {
          this.api.getOne(entityPath, param.id).subscribe((value: Candidate) => {
            this.candidate = value;
            this.actualSession = this.candidate.sessions[this.candidate.sessions.length - 1].session;
            console.log(this.candidate.sessions);
          });
        }
      });  }
}
