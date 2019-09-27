import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {DegreeApiService} from '../../services/degree-api.service';
import {CandidateApiService} from '../../services/candidate-api.service';
import {Candidate} from '../../models/candidate';

@Component({
  selector: 'app-degree-form',
  templateUrl: './degree-form.component.html',
  styleUrls: ['./degree-form.component.css']
})
export class DegreeFormComponent implements OnInit {

  constructor(private readonly fb: FormBuilder,
              private readonly route: ActivatedRoute,
              private readonly apiDegree: DegreeApiService,
              private readonly apiCandidate: CandidateApiService,
              private readonly router: Router) { }

  get isNew(): boolean { return this.degreeId === null; }

  get name(): AbstractControl { return this.form.controls.name; }
  get level(): AbstractControl { return this.form.controls.level; }
  get validationDate(): AbstractControl { return this.form.controls.validationDate; }

  candidate: Candidate = null;
  degreeId: number = null;

  form = this.fb.group({
    // id: [''],
    name: ['', Validators.required],
    level: ['', Validators.required],
    validationDate: ['', Validators.required]
  });

  ngOnInit() {
  }

  onSubmit() {
    let request = null;

    if (this.isNew) {
      request = this.route.params
        .subscribe(params => {
          // FIXME: Should manage not found (interceptor).
          if (params.id) {
            this
              .apiCandidate
              .getOne(params.id)
              .pipe(tap(e => this.candidate = e))
              .subscribe(e => {
                this.candidate = e;
                this.setToCandidate(this.candidate.id, this.setDegrees(this.candidate));
                // window.location.reload();
              });
          }
        });
    }

    return request;
  }

  private setDegrees(candidate) {
    const degree = this.form.value;
    candidate.degrees.push(degree);
    return candidate;
  }

  private setToCandidate(itemId: number, item: Candidate) {
    this.apiCandidate.edit(itemId, item).subscribe();
  }
}
