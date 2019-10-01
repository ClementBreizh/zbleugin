import { CompanyApiServiceService } from 'src/app/services/company-api-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  editedCompany: Company;
  form = this.fb.group({
    // id: null,
    name: ['', Validators.required],
    antennaName: '',
    siret: ['', Validators.pattern(/^\s*(\d\s*){14,14}$/)],
    apeCode: '',
    // contacts: Person[];
    // address: Address;
    address: []
  });
  constructor(
      private readonly fb: FormBuilder,
      private readonly route: ActivatedRoute,
      private readonly api: CompanyApiServiceService,
      private readonly router: Router) { }
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
    let request = null;
    company.siret = company.siret.replace(/\s+/g, '');
    if (this.isNew) {
      request = this.api.create(company).subscribe(data => {
        this.editedCompany = data;
        this.router.navigate(['company', this.editedCompany.id]);
      });
    } else {
      request = this.api.edit(this.id, company).subscribe(data => {
        this.editedCompany = data;
        this.router.navigate(['company', this.editedCompany.id]);
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
