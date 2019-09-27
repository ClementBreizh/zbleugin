import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/models/person';
import { PersonApiService } from 'src/app/services/person-api.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  person: Person;


  constructor(private api: PersonApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.api
          .getOne(params.id)
          .subscribe((value: Person) => {
            this.person = value;
          });
      }
    });
  }
}
