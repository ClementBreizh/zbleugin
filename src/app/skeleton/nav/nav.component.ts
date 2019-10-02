import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';
import {AuthenticationService} from '../../services/authentification.service';
import {User} from '../../models/user';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: User  = null;

  constructor(private route: ActivatedRoute, private readonly curUserServ: AuthenticationService) { }

  ngOnInit() {
    this.curUserServ.currentUser.subscribe(data => this.user = data);
  }

}
