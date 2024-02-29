import {IncomSpreadsheet} from './spreadsheet/incom.spreadsheet';
import {schemas} from './schemas';
import * as fs from 'fs-extra';
import {exhaustMap, interval} from 'rxjs';

async function refreshPoolResults(doc: IncomSpreadsheet) {
  const poolResults = await doc.getPoolResults();
  schemas.pools.forEach((pool => {
    fs.outputFileSync(pool.filename, JSON.stringify(poolResults.getMatches(pool.columnIndex, pool.switchRow, pool.endRow), undefined, 2));
  }))
}

async function refreshPoolTables(doc: IncomSpreadsheet) {
  const poolTables = await doc.getPoolTables();
  schemas.poolRanks.forEach((pool => {
    fs.outputFileSync(pool.filename, JSON.stringify(poolTables.getRanks(pool.columnIndex, pool.rowIndex), undefined, 2));
  }))
}

async function refreshResults() {
  console.log('Refreshing results');
  const doc = await IncomSpreadsheet.loadFrom(schemas.spreadsheetId);

  await refreshPoolResults(doc);
  await refreshPoolTables(doc);
  console.log('Results were correctly refreshed!');
}

function main() {
  interval(3000).pipe(
    exhaustMap(() => refreshResults())
  ).subscribe();
}

main();

