import express from 'express';
import {IncomSpreadsheet} from './spreadsheet/incom.spreadsheet';
import {schemas} from './schemas';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();

app.get('/', (req, res) => {
  res.send({message: 'Hello API'});
});

app.get('/matches', (req, res) => {
  const name: string = req.query.name as string;
  const columnIndex = schemas.pools.find((pool) => pool.name === name).columnIndex;
  IncomSpreadsheet
    .loadFrom(schemas.spreadsheetId)
    .then((doc) => doc.getPoolResults())
    .then((poolResults) => res.send({message: poolResults.getMatches(columnIndex)}))
});

app.get('/ranks', (req, res) => {
  const name: string = req.query.name as string;
  const columnIndex = schemas.pools.find((pool) => pool.name === name).columnIndex;
  const rowIndex = schemas.poolRanks.find((pool) => pool.name === name).rowIndex;
  IncomSpreadsheet
    .loadFrom(schemas.spreadsheetId)
    .then((doc) => doc.getPoolTables())
    .then((poolTables) => res.send({message: poolTables.getRanks(columnIndex, rowIndex)}))
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
