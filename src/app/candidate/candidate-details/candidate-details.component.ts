import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Candidate} from '../../models/candidate';
import {Session} from '../../models/session';
import {CandidateApiService} from '../../services/candidate-api.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  candidate: Candidate;

  private actualSession: Session;

  constructor(private api: CandidateApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.api
          .getOne(params.id)
          .subscribe((value: Candidate) => {
            this.candidate = value;
            this.actualSession = this.candidate.sessions[this.candidate.sessions.length - 1].session;
          });
      }
    });
  }
}
