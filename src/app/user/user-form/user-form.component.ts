import { Component, OnInit, Input } from '@angular/core';
import {AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {User} from '../../models/user';
import {UserApiService} from '../../services/user-api.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input()
  user = true;

  constructor(private readonly fb: FormBuilder,
              private readonly route: ActivatedRoute,
              private readonly api: UserApiService,
              private readonly router: Router) { }

  get isNew(): boolean { return this.id === null; }

  get firstname(): AbstractControl { return this.form.controls.firstname; }
  get lastname(): AbstractControl { return this.form.controls.lastname; }
  get email(): AbstractControl { return this.form.controls.email; }
  get cellPhone(): AbstractControl { return this.form.controls.cellPhone; }

  id: number = null;
  editedUser: User;

  form = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    cellPhone: ['', Validators.required],
    homePhone: [''],
    type: ['USER']
  });

  ngOnInit() {
    this.treatParameters();
  }

  onSubmit() {

    const user = this.form.value;

    let request = null;

    if (this.isNew) {
      request = this.api.create(user).subscribe(data => {
        this.editedUser = data;
        this.router.navigate(['user', this.editedUser.id]);
      });
    } else {
      request = this.api.edit(this.id, user).subscribe(data => {
        this.editedUser = data;
        console.log(this.editedUser);
        this.router.navigate(['user', this.editedUser.id]);
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

