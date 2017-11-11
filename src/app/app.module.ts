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
         MatSliderModule} from '@angular/material';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
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
    //Clipboard
    ClipboardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//
