import {GoogleSpreadsheet} from 'google-spreadsheet';

export class Spreadsheet {

  public static async openSpreadsheet(spreadsheetId: string): Promise<GoogleSpreadsheet> {
    const serviceAccountAuth = {} as any;
    const spreadsheet = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
    await spreadsheet.loadInfo();
    return spreadsheet;
  }
}
