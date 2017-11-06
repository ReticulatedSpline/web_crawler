import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//for Angular material UI
import { NoopAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule,
         ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule,
         MatCheckboxModule,
         MatInputModule,
         MatSnackBarModule,
         MatCardModule,
         MatTooltipModule,
         MatSelectModule,
         MatSliderModule} from '@angular/material';
import { ClipboardModule } from 'ngx-clipboard';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    //Forms
    FormsModule,
    ReactiveFormsModule,
    //Material
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatSelectModule,
    MatSliderModule,
    //Clipboard
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//
