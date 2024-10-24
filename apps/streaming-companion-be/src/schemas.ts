export interface Schemas {
  spreadsheetId: string;
  pools: PoolSchema[];
  poolRanks: PoolRanks[];
}

export interface PoolSchema {
  filename: string;
  columnIndex: number
}

export interface PoolRanks {
  filename: string;
  columnIndex: number;
  rowIndex: number;
}

export const schemas: Schemas = {
  spreadsheetId: '1XasRB15O4qkcv2V6IRfKiU5EobG263kJNKGrtDsNXDs',
  pools: [
    {filename: 'poolA1', columnIndex: 1},
    {filename: 'poolB1', columnIndex: 10},
    {filename: 'poolA2', columnIndex: 19},
    {filename: 'poolB2', columnIndex: 28},
    {filename: 'poolA3', columnIndex: 37},
    {filename: 'poolB3', columnIndex: 46}
  ],
  poolRanks: [
    {filename: 'poolA1', columnIndex: 1, rowIndex: 9},
    {filename: 'poolB1', columnIndex: 10, rowIndex: 9},
    {filename: 'poolA2', columnIndex: 19, rowIndex: 9},
    {filename: 'poolB2', columnIndex: 28, rowIndex: 9},
    {filename: 'poolA3', columnIndex: 37, rowIndex: 9},
    {filename: 'poolB3', columnIndex: 46, rowIndex: 9}
  ]
}
