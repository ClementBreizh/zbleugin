import { Component, OnInit } from '@angular/core';
import { CompanyApiServiceService } from 'src/app/services/company-api-service.service';
import { map } from 'rxjs/operators';
import { Company } from 'src/app/models/company';
import {MatIconRegistry, PageEvent, Sort} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {FormBuilder} from '@angular/forms';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  displayedColumns = ['name', 'apeCode', 'address', 'actions'];

  dataSource: Company[];

  resultNb: number;

  companyListForm = this.fb.group({
    name:  '',
    siret: '',
    apeCode: '',
    page: 0,
    size: 20,
    sort: ''
  });

  constructor(private api: CompanyApiServiceService, private iconRegistry: MatIconRegistry,
              private sanitizer: DomSanitizer, private fb: FormBuilder) { iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
                                                                          iconRegistry.addSvgIcon(
      'show',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/show.svg'));
                                                                          iconRegistry.addSvgIcon(
      'edit',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
                                                                          iconRegistry.addSvgIcon(
      'delete',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
                                                                          iconRegistry.addSvgIcon(
      'add',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
  }

  ngOnInit() {
    this.refresh();
  }

  onDelete(company: Company): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ' + company.name)) {
      this.api
          .deleteOne(company.id)
          .subscribe(_ => this.refresh()); // TODO: Use notification to show success OR failure.
    }
  }

  private refresh() {
    this.dataSource = null;
    this.api
        .getAll(this.params())

        .subscribe(data => {
          this.dataSource = data.content;
          this.resultNb = data.totalElements;
        });
  }

  onSubmit($event) {
    $event.preventDefault();

    this.companyListForm.patchValue({
      page: 0
    });

    return this.refresh();
  }

  // Reset companyListForm all values for httpPrams but elements number & sorting.
  onReset($event) {
    $event.preventDefault();

    this.companyListForm.patchValue({
      name:  '',
      mainContact: '',
      siret: '',
      apeCode: '',
      address: '',
        page: 0
      }
    );

    this.refresh();
  }

  pageEvent($event: PageEvent) {
    this.companyListForm.patchValue({
      page: $event.pageIndex,
      size: $event.pageSize
    });

    this.refresh();
  }

  params() {
    return Object.keys(this.companyListForm.controls)
      .filter(k => this.companyListForm.value[k] !== '')
      .reduce((acc, k) => ({...acc, [k]: this.companyListForm.value[k]}), {});
  }

  sortData($event: Sort) {
    if ($event.direction === '') {
      this.companyListForm.patchValue({
        sort: ''
      });
    } else {
      this.companyListForm.patchValue({
        sort: $event.active + ',' + $event.direction
      });
    }

    this.refresh();
  }
}
