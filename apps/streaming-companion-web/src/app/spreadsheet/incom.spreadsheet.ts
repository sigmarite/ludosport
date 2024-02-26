import {GoogleSpreadsheet} from 'google-spreadsheet';
import {Spreadsheet} from './spreadsheet';
import {PoolResultsWorksheet} from './pool-results.worksheet';
import {PoolTablesWorksheet} from './pool-tables.worksheet';

export class IncomSpreadsheet {

  constructor(private readonly spreadsheet: GoogleSpreadsheet) {
  }

  public static async loadFrom(spreadsheetId: string): Promise<IncomSpreadsheet> {
    const spreadsheet = await Spreadsheet.openSpreadsheet(spreadsheetId);
    return new IncomSpreadsheet(spreadsheet);
  }

  public async refresh(): Promise<void> {
    await this.spreadsheet.loadInfo();
  }

  public async getPoolResults(): Promise<PoolResultsWorksheet> {
    let poolResultsWorksheet = this.spreadsheet.sheetsByTitle['Pools Results'];

    await poolResultsWorksheet.loadCells({
      startRowIndex: 0,
      startColumnIndex: 0
    })
    return new PoolResultsWorksheet(poolResultsWorksheet);
  }

  public async getPoolTables(): Promise<PoolTablesWorksheet> {
    let poolResultsWorksheet = this.spreadsheet.sheetsByTitle['Pools Tables'];

    await poolResultsWorksheet.loadCells({
      startRowIndex: 0,
      startColumnIndex: 0
    })
    return new PoolTablesWorksheet(poolResultsWorksheet);
  }
}
