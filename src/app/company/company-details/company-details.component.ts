import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { CompanyApiServiceService } from 'src/app/services/company-api-service.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  company: Company;

  constructor(private route: ActivatedRoute, private api: CompanyApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.api
            .getOne(params.id)
            .subscribe(e => this.company = e);
      }
    });
  }

}
