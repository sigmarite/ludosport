import {JWT} from 'google-auth-library'
import {GoogleSpreadsheet} from 'google-spreadsheet';
import {GoogleAPIScopes} from './auth/scopes';
import {credentials} from './keys/ludosport-414716-a04f1ec6d74b';

const spreadsheetId = '1WSziZtu7A-dnMk8gLMVhg3k3PGB9aZTsdE2vJLe6rIc';

async function main() {
  const SCOPES = [
    GoogleAPIScopes.Sheets,
  ];

  const serviceAccountAuth = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: SCOPES,
  });
  const doc = new GoogleSpreadsheet(spreadsheetId, serviceAccountAuth);

  await doc.loadInfo(); // loads document properties and worksheets

  console.log('Title of the document', doc.title);

  // todo improve logic
  const sheet = doc.sheetsByTitle['Pools Results'];
  console.log('Number of rows in Pools Results sheets', sheet.rowCount);
  await sheet.loadCells('B2:C3'); // loads data

  let firstAthlete = sheet.getCell(1, 1).formattedValue;
  let firstAthleteScore = sheet.getCell(1, 2).formattedValue;
  let secondAthlete = sheet.getCell(2, 1).formattedValue;
  let secondAthleteScore = sheet.getCell(2, 2).formattedValue;
  console.log(`${firstAthlete}\t${firstAthleteScore} - ${secondAthleteScore}\t${secondAthlete}`);
}

main()
  .then(() => {
    console.log('Done')
    return process.exit(0);
  })

