import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {ZbleuginAPIService} from '../../services/zbleugin-api.service';
import {Candidate} from '../../models/candidate';
import {Degree} from '../../models/degree';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  candidate: Candidate;

  private entityPath = 'candidates';

  constructor(private api: ZbleuginAPIService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOne(this.entityPath);
  }

  getOne(entityPath) {
    this.route
      .params
      .subscribe(param => {
        if (param.id) {
          // this.candidate$ = this.api.getOne(this.entityPath, param.id);
          this.api.getOne(entityPath, param.id).subscribe((value: Candidate) => {this.candidate = value; console.log(value);});
          // this.api.getOne(entityPath, param.id).subscribe((value: Candidate) => console.log(value));
        }
      });  }
}