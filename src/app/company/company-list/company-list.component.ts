import { Component, OnInit } from '@angular/core';
import { CompanyApiServiceService } from 'src/app/services/company-api-service.service';
import { map } from 'rxjs/operators';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  displayedColumns = ['name', 'apeCode', 'mainContact', '_actions'];

  datasource: Company[];

  constructor(private api: CompanyApiServiceService) { }

  ngOnInit() {
    this.refresh();
  }

  drawMainContact(company: Company) {
    let result = '';
    const contact = company.contacts ? company.contacts.find(e => e.mainContact) || null : null;

    if (contact) {
      result = `${contact.firstname} ${contact.lastname}`;
    }

    return result;
  }

  onDelete(company: Company): void {
    this.api
        .deleteOne(company.id)
        .subscribe(_ => this.refresh()); // TODO: Use notification to show success OR failure.
  }

  private refresh() {
    this.datasource = null;
    this.api
        .getAll()
        .pipe(map(r => r.content))
        .subscribe(d => this.datasource = d);
  }
}
