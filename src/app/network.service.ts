import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'
import {Http} from '@angular/http';
import {Regex} from './regex';
import 'rxjs/add/operator/map';

@Injectable()

export class NetworkService {

  apiStart : string = "http://web-crawler-proto.herokuapp.com/init";
  //inject Http singleton
  constructor(private http:Http) {
  }

  //send a POST request to the server to process our request
  start(url : string, depth: number, regexes: Regex[], parent) {
      let body = {
         "url": url,
         "depth": depth,
         "regexes": regexes
      };

      return this.http.post(this.apiStart, body);
  }
}
