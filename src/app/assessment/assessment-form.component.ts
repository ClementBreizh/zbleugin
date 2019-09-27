import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CandidateApiService} from '../services/candidate-api.service';
import {Candidate} from '../models/candidate';
import {tap} from 'rxjs/operators';
import {AssessmentApiService} from '../services/assessment-api.service';

@Component({
  selector: 'app-assessment-form',
  templateUrl: './assessment-form.component.html',
  styleUrls: ['./assessment-form.component.css']
})
export class AssessmentFormComponent implements OnInit {

  constructor(private readonly fb: FormBuilder,
              private readonly route: ActivatedRoute,
              private readonly apiAssessment: AssessmentApiService,
              private readonly apiCandidate: CandidateApiService) { }

  get isNew(): boolean { return this.assessmentId === null; }

  get category(): AbstractControl { return this.form.controls.category; }
  get updatingDate(): AbstractControl { return this.form.controls.updatingDate; }
  get score(): AbstractControl { return this.form.controls.score; }
  get validationDate(): AbstractControl { return this.form.controls.validationDate; }

  candidate: Candidate = null;
  assessmentId: number = null;

  form = this.fb.group({
    // id: [''],
    category: ['', Validators.required],
    updatingDate: ['', Validators.required],
    score: ['', Validators.required],
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
                const editedCandidate = this.setAssessment(this.candidate);
                this.setToCandidate(this.candidate.id, editedCandidate);
                window.location.reload();
              });
          }
        });
    }

    return request;
  }

  private setAssessment(candidate) {
    const assessment = this.form.value;
    candidate.assessments.push(assessment);
    return candidate;
  }

  private setToCandidate(itemId: number, item: Candidate) {
    this.apiCandidate.edit(itemId, item).subscribe();
  }

}
