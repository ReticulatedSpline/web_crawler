import { Component,
         OnInit } from '@angular/core';
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
  public depth: number;
  public root: string;

  constructor(public snackBar: MatSnackBar) {
    this.submitted = false;
    this.regexes = [];
    this.email = true;
    this.phone = true;
    this.address = false;
    this.depth = 1;
    this.root = "";
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
          regex.expr === "" ||
          this.root === "") {
        return false;
      }
    }
    return true;
  }

  submit() : void {
    //parse each webpage for regex matches
    }

  setMailTo() : void {
    this.mailLink = String("mailto:?subject=Scraped%20Emails%20&body=");
    this.mailLink += String(/*Add results to email body*/);
    this.submitted = true;
  }

  openSnackbar() : void {
    this.snackBar.open("Copied to clipboard!", "Close", {
      duration: 2000,
    });
  }

  public githubLogoPath = "https://assets-cdn.github.com/favicon.ico";
  public questionMarkLogoPath = "http://www.act.org/content/dam/act/unsecured/Images/icons/icon-question.png";
  public githubLink = "https://github.com/ReticulatedSpline/Web-Crawler";
  public regexLink = "https://www.w3schools.com/jsref/jsref_obj_regexp.asp"
  private emailExpr = "^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$";
  private phoneExpr = "^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$";
  private addressExpr = "\d{1,5}\s\w.\s(\b\w*\b\s){1,2}\w*\.";
}
