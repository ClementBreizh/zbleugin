import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserApiService } from '../../services/user-api.service';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {


  user: User;

  constructor(
    private apiUser: UserApiService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.apiUser
          .getOne(params.id)
          .subscribe((value: User) => {
            this.user = value;
            console.log(this.user);
          });
      }
    });
  }
}
