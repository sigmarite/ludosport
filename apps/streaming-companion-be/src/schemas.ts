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
  spreadsheetId: '1WSziZtu7A-dnMk8gLMVhg3k3PGB9aZTsdE2vJLe6rIc',
  pools: [
    {name: 'poolA1', columnIndex: 1},
    {name: 'poolB1', columnIndex: 10},
    {name: 'poolA2', columnIndex: 19},
    {name: 'poolB2', columnIndex: 28}
  ],
  poolRanks: [
    {name: 'poolA1', columnIndex: 1, rowIndex: 10},
    {name: 'poolB1', columnIndex: 10, rowIndex: 10},
    {name: 'poolA2', columnIndex: 19, rowIndex: 10},
    {name: 'poolB2', columnIndex: 28, rowIndex: 10}
  ]
}
