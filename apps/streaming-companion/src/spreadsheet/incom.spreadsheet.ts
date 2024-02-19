import {GoogleSpreadsheet, GoogleSpreadsheetWorksheet} from 'google-spreadsheet';
import {Spreadsheet} from './spreadsheet';

export class IncomSpreadsheet {

  constructor(private readonly spreadsheet: GoogleSpreadsheet) {
  }

  public static async loadFrom(spreadsheetId: string): Promise<IncomSpreadsheet> {
    const spreadsheet = await Spreadsheet.openSpreadsheet(spreadsheetId);
    return new IncomSpreadsheet(spreadsheet);
  }

  public async getPoolResults(): Promise<GoogleSpreadsheetWorksheet> {
    let poolResultsWorksheet = this.spreadsheet.sheetsByTitle['Pools Results'];

    await poolResultsWorksheet.loadCells({
      startRowIndex: 0,
      startColumnIndex: 0
    })
    return poolResultsWorksheet
  }
}
