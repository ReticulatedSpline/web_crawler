import { Component,
         OnInit,} from '@angular/core';
import { FormsModule,
         ReactiveFormsModule,
         FormControl,
         FormArray,
         Validators } from '@angular/forms';
import {MatButtonModule,
        MatSlideToggleModule,
        MatInputModule,
        MatSnackBar,
        MatCardModule,
        MatSelectModule,
        MatSliderModule} from '@angular/material';
import 'hammerjs';
import {NetworkService} from './network.service';
import {Regex} from './regex';
import {Observable} from 'rxjs/observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public regexes : Regex[];
  public formArray : FormArray;
  public mailLink : string;
  public submitted : boolean;
  public email: boolean;
  public phone: boolean;
  public address: boolean;
  public depth: number;
  public root: string;

  constructor(public snackBar: MatSnackBar,
              private networkService: NetworkService) {
    this.regexes = [];
    this.submitted = false;
    this.email = true;
    this.phone = true;
    this.address = false;
    this.depth = 1;
    this.root = defaultRoot;
  }

  addRegex() : void {
    this.regexes.push(new Regex("", ""));
  }

  removeRegex() : void {
    this.regexes.pop();
  }

  valid() : boolean {
    for (let regex of this.regexes) {
      if (regex.name === "" ||
          regex.expr === "") {
        return false;
      }
    }
    if (this.root === "") {
      return false;
    } else {
      return true;
    }
  }

  onKey(event: "rootTrigger") {
    this.valid();
  }

  submit() : void {
    if (this.email) this.regexes.push(new Regex("Email", emailExpr));
    if (this.phone) this.regexes.push(new Regex("Phone", phoneExpr));
    if (this.address) this.regexes.push(new Regex("Address", addressExpr));
    this.submitted = true;
    this.networkService.start(this.root, this.depth, this.regexes);
  }

  setMailTo() : void {
    this.mailLink = String("mailto:?subject=Scraped%20Emails%20&body=");
    this.mailLink += String(/*Add results to email body*/);
    this.submitted = true;
  }

  copy() {
    //TODO: add copy functionality
    this.snackBar.open("Not yet supported!", "Close", {
      duration: 2000,
    });
  }

  reset() {
    this.regexes = [];
    this.submitted = false;
  }

  public githubLogoPath = "https://assets-cdn.github.com/favicon.ico";
  public questionMarkLogoPath = "http://www.act.org/content/dam/act/unsecured/Images/icons/icon-question.png";
  public githubLink = "https://github.com/ReticulatedSpline/Web-Crawler";
  public regexLink = "https://www.w3schools.com/jsref/jsref_obj_regexp.asp"
}

const defaultRoot = "https://www.google.com/search?q=colorado%20physicians";
const emailExpr = "[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,}([A-Z]{2,})?";
const phoneExpr = "(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}";
const addressExpr = "\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.";
