export interface Schemas {
  spreadsheetId: string;
  pools: PoolSchema[];
  poolRanks: PoolRanks[];
}

export interface PoolSchema {
  name: string;
  columnIndex: number
}

export interface PoolRanks {
  name: string;
  columnIndex: number;
  rowIndex: number;
}

export const schemas: Schemas = {
  spreadsheetId: '1XasRB15O4qkcv2V6IRfKiU5EobG263kJNKGrtDsNXDs',
  pools: [
    {name: 'poolA1', columnIndex: 1},
    {name: 'poolB1', columnIndex: 10},
    {name: 'poolA2', columnIndex: 19},
    {name: 'poolB2', columnIndex: 28},
    {name: 'poolA3', columnIndex: 37},
    {name: 'poolB3', columnIndex: 46}
  ],
  poolRanks: [
    {name: 'poolA1', columnIndex: 1, rowIndex: 10},
    {name: 'poolB1', columnIndex: 10, rowIndex: 10},
    {name: 'poolA2', columnIndex: 19, rowIndex: 10},
    {name: 'poolB2', columnIndex: 28, rowIndex: 10},
    {name: 'poolA3', columnIndex: 37, rowIndex: 10},
    {name: 'poolB3', columnIndex: 46, rowIndex: 10}
  ]
}
