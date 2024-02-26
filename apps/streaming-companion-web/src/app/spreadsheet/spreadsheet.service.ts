import {BehaviorSubject, exhaustMap, from, interval, Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {IncomSpreadsheet} from './incom.spreadsheet';

export class SpreadsheetService {
  private readonly ranks$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private readonly matches$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
    this.listenToChangesOnGoogleSheet();
  }

  getMatches$(): Observable<string> {
    return this.matches$.asObservable();
  }

  getRanks$(): Observable<string> {
    return this.ranks$.asObservable();
  }

  private listenToChangesOnGoogleSheet() {
    interval(3000).pipe(
      exhaustMap(() => from(this.refreshResults()))
    ).subscribe();
  }

  private async refreshResults(): Promise<void> {
    console.warn('Refreshing')
    const doc = await IncomSpreadsheet.loadFrom(environment.spreadsheetId);

    const poolResults = await doc.getPoolResults();
    this.matches$.next(poolResults.getMatches(environment.poolResult.columnIndex));

    const poolTables = await doc.getPoolTables();
    this.ranks$.next(poolTables.getRanks(environment.poolTables.columnIndex, environment.poolTables.rowIndex))
    console.warn('done');
  }
}
