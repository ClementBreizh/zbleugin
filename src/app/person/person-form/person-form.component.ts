import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, AbstractControl, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonApiService} from 'src/app/services/person-api.service';
import {Person} from 'src/app/models/person';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

  @Input()
  person = false;

  constructor(private readonly fb: FormBuilder,
              private readonly route: ActivatedRoute,
              private readonly api: PersonApiService,
              private readonly router: Router) {
  }

  get isNew(): boolean {
    return this.id === null;
  }

  get firstname(): AbstractControl {
    return this.form.controls.firstname;
  }

  get lastname(): AbstractControl {
    return this.form.controls.lastname;
  }

  get email(): AbstractControl {
    return this.form.controls.email;
  }

  get cellPhone(): AbstractControl {
    return this.form.controls.cellPhone;
  }

  id: number = null;
  editedPerson: Person;

  form = this.fb.group({
// id: [''],
    sexCandidate: [''],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    cellPhone: ['', Validators.required],
    homePhone: [''],
    commentary: [''],
    rankingCandidate: [''],
    statusCandidate: ['']
  });

  ngOnInit() {
    this.treatParameters();
  }

  onSubmit() {
// TODO: determine post/put
// TODO: send api

    const person = this.form.value;

    let request = null;

    if (this.isNew) {
      request = this.api.create(person).subscribe(data => {
        this.editedPerson = data;
        this.router.navigate(['person', this.editedPerson.id]);
      });
    } else {
      request = this.api.edit(this.id, person).subscribe(data => {
        this.editedPerson = data;
        this.router.navigate(['person', this.editedPerson.id]);
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

