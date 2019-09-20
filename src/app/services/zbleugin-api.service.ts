import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ZbleuginAPIService {

  constructor(private http: HttpClient) { }

  getAll(entityPath) {
    return this.http.get<any>(environment.apiUrl + entityPath);
  }

  getOne(entityPath, id) {
    return this.http.get<any>(environment.apiUrl + entityPath + '/' + id);
  }
}
