import {IncomSpreadsheet} from './spreadsheet/incom.spreadsheet';
import {schemas} from './schemas';
import * as fs from 'fs';

const spreadsheetId = '1WSziZtu7A-dnMk8gLMVhg3k3PGB9aZTsdE2vJLe6rIc';

async function main() {
  const doc = await IncomSpreadsheet.loadFrom(spreadsheetId);

  const poolResults = await doc.getPoolResults();

  schemas.pools.forEach((pool => {
    const results = poolResults.getMatches(pool.columnIndex);
    const fileData = results.join('\n');
    console.log(fileData);
    fs.writeFileSync(pool.filename, fileData);
  }))
}

main()
  .then(() => {
    console.log('Done')
    return process.exit(0);
  })

