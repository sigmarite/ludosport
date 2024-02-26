import {ChangeDetectionStrategy, Component} from '@angular/core';
import {SpreadsheetService} from './spreadsheet/spreadsheet.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'ludosport-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  matches$: Observable<string>;
  ranks$: Observable<string>;

  constructor(private readonly spreadsheetService: SpreadsheetService) {
    this.matches$ = this.spreadsheetService.getMatches$();
    this.ranks$ = this.spreadsheetService.getRanks$();
  }
}
