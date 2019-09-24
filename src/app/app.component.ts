
import { User } from './models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentification.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUser: User;

  constructor(
      private router: Router,
      private authenticationService: AuthenticationService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
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
