import {Component, Injectable,Input,Output,EventEmitter} from '@angular/core'
import {Http} from '@angular/http';
import {Regex} from './regex';
import 'rxjs/add/operator/map';

@Injectable()

export class NetworkService {

  apiStart : string = "/init";
  //inject Http singleton
  constructor(private http:Http) {
  }

  //send a POST request to the server to process our request
  start(url : string, depth: number, regexes: Regex[], external: boolean, parent) {
      let body = {
         "url": url,
         "depth": depth,
         "external": external,
         "regexes": regexes
      };

      return this.http.post(this.apiStart, body);
  }
}
