import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'
import {Http} from '@angular/http';
import {Regex} from './regex';
import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';

@Injectable()

export class NetworkService {

  apiStart : string = "http://localhost:8080/init";

  //inject Http singleton
  constructor(private http:Http) {
  }

  //send a POST request to the server to process our request
  start(url : string, depth: number, regexes: Regex[]) {
      let body = {
         "url": url,
         "depth": depth,
         "regexes": regexes
      };

      return this.http.post(this.apiStart, body)
                      .subscribe(res => res.json);
  }
}
