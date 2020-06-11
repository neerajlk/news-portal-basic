import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private http: HttpClient) {}

  public url = environment.API_URL;
  public header = new HttpHeaders().set('Authorization', environment.token);

  GET(param) {
    return this.http.get(this.url, {
      headers: this.header,
      params: param,
    });
  }
}
