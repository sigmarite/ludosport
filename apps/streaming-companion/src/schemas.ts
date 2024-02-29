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
  spreadsheetId: '1WSziZtu7A-dnMk8gLMVhg3k3PGB9aZTsdE2vJLe6rIc',
  pools: [
    {filename: '../streaming-companion-render/build/json/poolA1.json', columnIndex: 1},
    {filename: '../streaming-companion-render/build/json/poolB1.json', columnIndex: 10},
    {filename: '../streaming-companion-render/build/json/poolA2.json', columnIndex: 19},
    {filename: '../streaming-companion-render/build/json/poolB2.json', columnIndex: 28}
  ],
  poolRanks: [
    {filename: '../streaming-companion-render/build/json/poolA1-ranks.json', columnIndex: 1, rowIndex: 10},
    {filename: '../streaming-companion-render/build/json/poolB1-ranks.json', columnIndex: 10, rowIndex: 10},
    {filename: '../streaming-companion-render/build/json/poolA2-ranks.json', columnIndex: 19, rowIndex: 10},
    {filename: '../streaming-companion-render/build/json/poolB2-ranks.json', columnIndex: 28, rowIndex: 10}
  ]
}
