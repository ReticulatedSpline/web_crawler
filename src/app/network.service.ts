import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'
import {Http} from '@angular/http';
import {Regex} from './regex';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()

export class NetworkService {

  apiStart : string = "http://localhost:8080/init";
  apiFetch : string = "http://localhost:8080/results";

  constructor(private http:Http) {
  }

  start(url : string, depth: number, regexes: Regex[]) {
      let body = {
         "url": url,
         "depth": depth,
         "regexes": regexes
      };

      return this.http.post(this.apiStart, body)
      .subscribe(res => res.json);
  }

  get() {
    return this.http.get(this.apiFetch)
    .map(res => res.json);
  }
}
