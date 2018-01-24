import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//for Angular material UI
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule,
         MatSlideToggleModule,
         MatInputModule,
         MatSnackBarModule,
         MatCardModule,
         MatTooltipModule,
         MatSelectModule,
         MatSliderModule,
         MatProgressBarModule,
         MatDividerModule} from '@angular/material';
import {HttpModule} from '@angular/http';
import { ClipboardModule } from 'ngx-clipboard';
import {NetworkService} from './network.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //Network
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    //Forms
    FormsModule,
    ReactiveFormsModule,
    //Material
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatSliderModule,
    MatProgressBarModule,
    MatDividerModule,
    //Clipboard
    ClipboardModule,
  ],
  providers: [NetworkService],
  bootstrap: [AppComponent]
})
export class AppModule { }
//
