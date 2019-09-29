import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentification.service';

@Component({
  selector: 'app-login-wigdet',
  templateUrl: './login-wigdet.component.html',
  styleUrls: ['./login-wigdet.component.css']
})
export class LoginWigdetComponent implements OnInit {

  currentUser: User;


  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/login']);
  }

  // Method to switch between login/logout button
  switchButton() {
    if (this.authenticationService.currentUserValue == null) {
      return true;
    } else {
        return false;
        }
  }
}
