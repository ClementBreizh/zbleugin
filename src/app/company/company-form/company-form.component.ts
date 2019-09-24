import { CompanyApiServiceService } from 'src/app/services/company-api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {

  id: number = null;

  form = this.fb.group({
    // id: null,
    name: ['', Validators.required],
    antennaName: '',
    siret: ['', Validators.pattern(/^\s*(\d\s*){14,14}$/)],
    apeCode: '',
    // contacts: Person[];
    // address: Address;
    address: this.fb.group({

    })
  });

  constructor(
      private readonly fb: FormBuilder,
      private readonly route: ActivatedRoute,
      private readonly api: CompanyApiServiceService) { }

  ngOnInit() {
    this.treatParameters();
  }

  get isNew(): boolean { return this.id === null; }

  get name(): AbstractControl { return this.form.controls.name; }
  get siret(): AbstractControl { return this.form.controls.siret; }

  onSubmit() {
    // TODO: determine post/put
    // TODO: send api

    const company: Company = this.form.value;

    company.siret = company.siret.replace(/\s+/g, '');

    console.log('Valid');
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
