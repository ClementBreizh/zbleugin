import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Degree} from '../../models/degree';
import {tap} from 'rxjs/operators';
import {DegreeApiService} from '../../services/degree-api.service';
import {CandidateApiService} from '../../services/candidate-api.service';
import {HttpParams} from '@angular/common/http';
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
  get validationDate(): AbstractControl { return this.form.controls.validation_date; }

  candidate: Candidate = null;
  degreeId: number = null;
  // editedDegree: Degree;

  form = this.fb.group({
    // id: [''],
    name: ['', Validators.required],
    level: ['', Validators.required],
    validation_date: ['', Validators.required]
  });

  ngOnInit() {
  }

  onSubmit() {
    // const degree = this.form.value;

    let request = null;

    if (this.isNew) {
      // request = this.apiDegree.create(degree).subscribe(data => {
        // this.editedDegree = data;
        // this.setToCandidate(this.editedDegree);
        // this.router.navigate([this.router.getCurrentNavigation()]);
        // TODO: Reload current route
      // });
      request =
        this.route.params
          .subscribe(params => {
            // FIXME: Should manage not found (interceptor).
            if (params.id) {
              this
                .apiCandidate
                .getOne(params.id)
                .pipe(tap(e => this.candidate = e))
                .subscribe(e => {
                  this.candidate = e;
                  const degree = this.form.value;
                  this.candidate.degrees.push(degree);
                  console.log(this.candidate);
                  this.apiCandidate.edit(this.candidate.id, this.candidate).subscribe();                  }
                );
            }
          });
    } else {
      // TODO : Faire fonctionner l'édition
    }

    return request;
  }

  /** Initializes from route parameters. */
  // private setToCandidate(degree) {
  //   return this.route
  //     .params
  //     .subscribe(params => {
  //       // FIXME: Should manage not found (interceptor).
  //       if (params.id) {
  //         this
  //           .apiCandidate
  //           .getOne(params.id)
  //           .pipe(tap(e => this.candidate = e))
  //           .subscribe(e => {
  //             this.candidate = e;
  //             this.editCandidate(degree, this.candidate);
  //             }
  //           );
  //       }
  //     });
  // }

  // private editCandidate(degree, candidate) {
  //   candidate.degrees.push(degree);
  //   this.apiCandidate.edit(candidate.id, candidate).subscribe();
  // }
}
