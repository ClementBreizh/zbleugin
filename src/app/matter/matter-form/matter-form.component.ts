import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CandidateApiService} from '../../services/candidate-api.service';
import {Candidate} from '../../models/candidate';
import {tap} from 'rxjs/operators';
import {AcquiredMatterApiService} from '../../services/acquired-matter-api.service';
import {MatterApiService} from '../../services/matter-api.service';
import {Matter} from '../../models/matter';
import {AcquiredMatter} from '../../models/acquiredMatter';

@Component({
  selector: 'app-matter-form',
  templateUrl: './matter-form.component.html',
  styleUrls: ['./matter-form.component.css']
})
export class MatterFormComponent implements OnInit {
  constructor(private readonly fb: FormBuilder,
              private readonly route: ActivatedRoute,
              private readonly apiAcquiredMatter: AcquiredMatterApiService,
              private readonly apiMatter: MatterApiService,
              private readonly apiCandidate: CandidateApiService) { }

  get isNew(): boolean { return this.matterId === null; }

  get name(): AbstractControl { return this.form.controls.name; }

  candidate: Candidate = null;
  matterId: number = null;
  data: Matter;

  form = this.fb.group({
    // id: [''],
    name: ['', Validators.required]
  });

  ngOnInit() {
  }

  onSubmit() {

    if (this.isNew) {
      const matter = this.form.value;
      this.apiMatter.create(matter).subscribe(data => {
        const acquiredMatter: AcquiredMatter = {
          id: data.id,
          matter: data
        };
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
                  this.setToCandidate(this.candidate.id, this.setMatter(this.candidate, acquiredMatter));
                  console.log(this.candidate);
                  // window.location.reload();
                });
            }
          });
      });
    }
  }

  private setMatter(candidate, acquiredMatter) {
    candidate.matters.push(acquiredMatter);
    return candidate;
  }

  private setToCandidate(itemId: number, item: Candidate) {
    this.apiCandidate.edit(itemId, item).subscribe();
  }
}
