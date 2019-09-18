import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {ZbleuginAPIService} from '../../services/zbleugin-api.service';
import {Candidate} from '../../models/candidate';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  candidate$: Observable<Candidate>;

  private entityPath = 'candidates';

  constructor(private api: ZbleuginAPIService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route
      .params
      .subscribe(param => {
        if (param.id) {
          // this.getOne(this.entityPath, param.id)
          this.candidate$ = this.api.getOne(this.entityPath, param.id);

      }
    });
  }

  // getOne(entityPath, id) {
  //   this.api.getOne(this.entityPath, id).subscribe(data => {this.candidate = data});
  // }
}
