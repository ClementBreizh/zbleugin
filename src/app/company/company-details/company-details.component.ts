import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { CompanyApiServiceService } from 'src/app/services/company-api-service.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  error: string;
  company: Company;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private api: CompanyApiServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.api
            .getOne(params.id)
            .subscribe(e => this.company = e);
      }
    });
  }

  onDelete(): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ' + this.company.name)) {
      this.api
          .deleteOne(this.company.id)
          .subscribe(
            _ => this.router.navigate(['../../list'], { relativeTo: this.route }),
            _ => this.error = 'Suppresion impossible');
    }
  }
}
