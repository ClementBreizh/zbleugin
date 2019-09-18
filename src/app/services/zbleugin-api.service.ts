import {Injectable, Type} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Candidate} from '../models/candidate';
import {Observable} from 'rxjs';
import {Generic} from '../models/generic';

@Injectable({
  providedIn: 'root'
})
export class ZbleuginAPIService {

  constructor(private http: HttpClient) { }

  getAll(entityPath) {
    return this.http.get<any[]>(environment.apiUrl + entityPath);
  }

  getOne(entityPath, id) {
    return this.http.get<any>(environment.apiUrl + entityPath + '/' + id);
  }
}
