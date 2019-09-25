import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {tap} from 'rxjs/operators';
import {Candidate} from '../../models/candidate';
import {CandidateApiService} from '../../services/candidate-api.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  constructor(private readonly fb: FormBuilder,
              private readonly route: ActivatedRoute,
              private readonly api: CandidateApiService) { }

  get isNew(): boolean { return this.id === null; }

  get firstname(): AbstractControl { return this.form.controls.firstname; }
  get lastname(): AbstractControl { return this.form.controls.lastname; }
  get email(): AbstractControl { return this.form.controls.email; }
  get cellPhone(): AbstractControl { return this.form.controls.cellPhone; }

  id: number = null;

  form = this.fb.group({
    // id: null,
    sexCandidate: [''],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    cellPhone: ['', Validators.required],
    homePhone: [''],
    commentary: [''],
    rankingCandidate: [''],
    statusCandidate: [''],
    address_id: []
  });

  ngOnInit() {
    this.treatParameters();
  }

  onSubmit() {
    // TODO: determine post/put
    // TODO: send api

    const candidate: Candidate = this.form.value;

    return this.api.create(candidate).subscribe(console.log);

    // console.log(candidate);
    // console.log('Valid');
  }

  /** Initializes from route parameters. */
  private treatParameters() {
    this.route
      .params
      .subscribe(params => {
        // FIXME: Should manage not found (interceptor).
        if (params.id) {
          this
            .api
            .getOne(params.id)
            .pipe(tap(e => this.id = e.id))
            .subscribe(e => this.form.patchValue(e));
        }
      });
  }
}
