import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {SpreadsheetService} from './spreadsheet/spreadsheet.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [SpreadsheetService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
