export interface Schemas {
  spreadsheetId: string;
  pools: PoolSchema[];
  poolRanks: PoolRanks[];
}

export interface PoolSchema {
  filename: string;
  columnIndex: number;
  switchRow: number;
  endRow: number;
}

export interface PoolRanks {
  filename: string;
  columnIndex: number;
  rowIndex: number;
}

export const schemas: Schemas = {
  spreadsheetId: '1XasRB15O4qkcv2V6IRfKiU5EobG263kJNKGrtDsNXDs',
  pools: [
    {filename: '../streaming-companion-render/build/json/poolA1.json', columnIndex: 1, switchRow: 31, endRow: 64},
    {filename: '../streaming-companion-render/build/json/poolB1.json', columnIndex: 10, switchRow: 31, endRow: 64},
    {filename: '../streaming-companion-render/build/json/poolA2.json', columnIndex: 19, switchRow: 31, endRow: 64},
    {filename: '../streaming-companion-render/build/json/poolB2.json', columnIndex: 28, switchRow: 31, endRow: 64},
    {filename: '../streaming-companion-render/build/json/poolA3.json', columnIndex: 37, switchRow: 22, endRow: 46},
    {filename: '../streaming-companion-render/build/json/poolB3.json', columnIndex: 46, switchRow: 22, endRow: 46},
  ],
  poolRanks: [
    {filename: '../streaming-companion-render/build/json/poolA1-ranks.json', columnIndex: 1, rowIndex: 9},
    {filename: '../streaming-companion-render/build/json/poolB1-ranks.json', columnIndex: 10, rowIndex: 9},
    {filename: '../streaming-companion-render/build/json/poolA2-ranks.json', columnIndex: 19, rowIndex: 9},
    {filename: '../streaming-companion-render/build/json/poolB2-ranks.json', columnIndex: 28, rowIndex: 9},
    {filename: '../streaming-companion-render/build/json/poolA3-ranks.json', columnIndex: 37, rowIndex: 9},
    {filename: '../streaming-companion-render/build/json/poolB3-ranks.json', columnIndex: 46, rowIndex: 9}
  ]
}
