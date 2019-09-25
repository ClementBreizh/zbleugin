import { environment } from './../../environments/environment';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Optional } from '@angular/core';

/** Generalizes our common processes about HTTP requests. */
export abstract class ApiServiceService<T> {
  /** API base from environment + path for resource. Value without final slash. */
  private apiUrl: string = null;

  /** Constructor. */
  constructor(@Optional() private readonly http: HttpClient) {
    this.apiUrl = environment.apiUrl.replace(/\/$/, '') + '/' + this.url().replace(/^\/?(.*?)\/?$/g, '$1');
  }

  /** Proxy to perform GET HTTP requests. */
  protected get(url: string|number = '', params: HttpParams = null) {
    return this.http.get<any>(this.buildUrl(url), {params});
  }
  /** Proxy to perform POST HTTP requests. */
  protected post(data: {[key: string]: any}, url: string = '') {
    return this.http.post<any>(this.buildUrl(url), data);
  }

  /** Proxy to perform PUT HTTP requests. */
  protected put(data: {[key: string]: any}, url: string = '') {
    return this.http.put<any>(this.buildUrl(url), data);
  }

  /** Proxy to perform DELETE HTTP requests. */
  protected delete(url: string|number = '') {
    return this.http.delete<any>(this.buildUrl(url));
  }

  /** Gives the specific API part of current service. */
  protected abstract url(): string;

  /** Builds the complete URL from final part escaping '/' problems. */
  private buildUrl(url: string|number) {
    return this.apiUrl + `/${url}`.replace(/\/\//g, '');
  }
}
