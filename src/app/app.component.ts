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
        MatSliderModule,
        MatProgressBarModule} from '@angular/material';
import 'hammerjs';
import {NetworkService} from './network.service';
import {Regex} from './regex';

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
  public loaded: boolean;
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
    this.loaded = false;
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
    console.log("Submitting request to server...");
    // this probably violates every convention of angular, javascript, and async
    // programming. Also the 80 character limit. Who's going to stop me?
    let parent = this;
    this.networkService.start(this.root, this.depth, this.regexes, parent)
                       .subscribe(res => {
                         console.log("Response recieved!");
                         let parsed = res.json();
                         parsed.forEach(function (item, index) {
                           parent.regexes[index] = item;
                         });
                         parent.setMailTo();
                         parent.loaded = true;
                       });
  }

  setMailTo() : void {
    this.mailLink = String("mailto:?subject=Scraped%20Emails%20&body=");
    for (let regex of this.regexes) {
      this.mailLink += "\n----------";
      this.mailLink += regex.name.endsWith('s') ?
                              regex.name + "es" : regex.name + "s";
      this.mailLink += "----------\n";
      this.mailLink += regex.found + "\n\n";
    }
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
    this.loaded = false;
  }

  public githubLogoPath = "https://assets-cdn.github.com/favicon.ico";
  public questionMarkLogoPath = "http://www.act.org/content/dam/act/unsecured/Images/icons/icon-question.png";
  public githubLink = "https://github.com/ReticulatedSpline/Web-Crawler";
  public regexLink = "https://www.w3schools.com/jsref/jsref_obj_regexp.asp"
}

const defaultRoot = "http://www.d.umn.edu/~sholtz/";
const emailExpr = "[A-Z0-9.]+@[A-Z0-9.-]+\.[A-Z]{2,}([A-Z]{2,})?";
const phoneExpr = "(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}";
const addressExpr = "\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.";
