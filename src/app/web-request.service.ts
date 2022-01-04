import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://apii-git-tooools.apps.eu45.prod.nextcle.com/';
  }

  get() {
    return this.http.get(`${this.ROOT_URL}`);
  }

  post(payload: Object) {
    return this.http.post(`${this.ROOT_URL}`, payload);
  }
}