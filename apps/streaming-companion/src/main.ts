import {IncomSpreadsheet} from './spreadsheet/incom.spreadsheet';
import {schemas} from './schemas';
import * as fs from 'fs';
import {exhaustMap, interval} from 'rxjs';

async function refreshResults() {
  console.log('Refreshing results');
  const doc = await IncomSpreadsheet.loadFrom(schemas.spreadsheetId);

  const poolResults = await doc.getPoolResults();

  schemas.pools.forEach((pool => {
    const results = poolResults.getMatches(pool.columnIndex);
    const fileData = results.join('\n');
    fs.writeFileSync(pool.filename, fileData);
  }))
  console.log('Results were correctly refreshed!');
}

function main() {
  interval(3000).pipe(
    exhaustMap(() => refreshResults())
  ).subscribe();
}

main();

