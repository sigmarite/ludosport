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
    {filename: 'apps/streaming-companion/outputs/poolA1.txt', columnIndex: 1},
    {filename: 'apps/streaming-companion/outputs/poolB1.txt', columnIndex: 10},
    {filename: 'apps/streaming-companion/outputs/poolA2.txt', columnIndex: 19},
    {filename: 'apps/streaming-companion/outputs/poolB2.txt', columnIndex: 28}
  ],
  poolRanks: [
    {filename: 'apps/streaming-companion/outputs/poolA1-ranks.txt', columnIndex: 1, rowIndex: 10},
    {filename: 'apps/streaming-companion/outputs/poolB1-ranks.txt', columnIndex: 10, rowIndex: 10},
    {filename: 'apps/streaming-companion/outputs/poolA2-ranks.txt', columnIndex: 19, rowIndex: 10},
    {filename: 'apps/streaming-companion/outputs/poolB2-ranks.txt', columnIndex: 28, rowIndex: 10}
  ]
}
