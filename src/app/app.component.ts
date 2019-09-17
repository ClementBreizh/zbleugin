import {Component, OnInit} from '@angular/core';
import {ZbleuginAPIService} from './services/zbleugin-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zbleugin';

  constructor(private api: ZbleuginAPIService) {}

  // Api console test - Delete ngOnInit() and the implements later
  ngOnInit(): void {
      this.api.getAll('matters').subscribe(console.log, console.error);
      this.api.getOne('matters', 1).subscribe(console.log, console.error);
  }
}
