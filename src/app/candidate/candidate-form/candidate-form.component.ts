import { Component, OnInit, Input } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {Candidate} from '../../models/candidate';
import {CandidateApiService} from '../../services/candidate-api.service';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  @Input()
  candidate = true;

  constructor(private readonly fb: FormBuilder,
              private readonly route: ActivatedRoute,
              private readonly api: CandidateApiService,
              private readonly router: Router) { }

  get isNew(): boolean { return this.id === null; }

  get firstname(): AbstractControl { return this.form.controls.firstname; }
  get lastname(): AbstractControl { return this.form.controls.lastname; }
  get email(): AbstractControl { return this.form.controls.email; }
  get cellPhone(): AbstractControl { return this.form.controls.cellPhone; }

  id: number = null;
  editedCandidate: Candidate;

  form = this.fb.group({
    // id: [''],
    sex: [''],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    cellPhone: ['', Validators.required],
    homePhone: [''],
    commentary: [''],
    ranking: [''],
    status: [''],
    address: [],
    comentary: [''],
    appointments: [],
    feedback: [],
    degrees: [],
    companySession: [],
    assessments: []
  });

  ngOnInit() {
    this.treatParameters();
  }

  onSubmit() {
    // TODO: determine post/put
    // TODO: send api

    const candidate = this.form.value;

    let request = null;

    if (this.isNew) {
      request = this.api.create(candidate).subscribe(data => {
        this.editedCandidate = data;
        this.router.navigate(['candidate', this.editedCandidate.id]);
      });
    } else {
      // TODO: Recupérer le candidat, l'editer, et l'envoyer.

      request = this.api.edit(this.id, candidate).subscribe(data => {
        this.editedCandidate = data;
        console.log(this.editedCandidate);
        this.router.navigate(['candidate', this.editedCandidate.id]);
      });
    }

    return request;
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
