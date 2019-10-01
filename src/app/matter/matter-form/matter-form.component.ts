import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input() candidate: Candidate;
  @Output() create = new EventEmitter<AcquiredMatter>();

  form = this.fb.group({
    // id: [''],
    name: ['', Validators.required],
    validationDate: '',
    score: ''
  });

  constructor(private readonly fb: FormBuilder,
              private readonly apiCandidate: CandidateApiService) { }

  get name(): AbstractControl { return this.form.controls.name; }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.form.value);
    this.apiCandidate.createMatter(this.candidate.id, this.form.value)
        .subscribe(data => this.create.emit(data));
    this.form.patchValue({
      name: '',
      validationDate: '',
      score: ''
    });
  }
}
