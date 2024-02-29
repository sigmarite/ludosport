import {GoogleSpreadsheet} from 'google-spreadsheet';
import {AuthUtil} from '../auth/auth.util';

export class Spreadsheet {

  public static async openSpreadsheet(spreadsheetId): Promise<GoogleSpreadsheet> {
    const serviceAccountAuth = AuthUtil.createServiceAccount();
    const spreadsheet = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);
    await spreadsheet.loadInfo();
    return spreadsheet;
  }
}
