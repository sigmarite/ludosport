import {IncomSpreadsheet} from './spreadsheet/incom.spreadsheet';

const spreadsheetId = '1WSziZtu7A-dnMk8gLMVhg3k3PGB9aZTsdE2vJLe6rIc';

async function main() {
  const doc = await IncomSpreadsheet.loadFrom(spreadsheetId);

  // todo improve logic
  const sheet = await doc.getPoolResults();
  console.log('Number of rows in Pools Results sheets', sheet.rowCount);

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

