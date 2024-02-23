export interface Schemas {
  spreadsheetId: string;
  pools: PoolSchema[];
}

export interface PoolSchema {
  filename: string;
  columnIndex: number
}

export const schemas: Schemas = {
  spreadsheetId: '1WSziZtu7A-dnMk8gLMVhg3k3PGB9aZTsdE2vJLe6rIc',
  pools: [
    {filename: 'apps/streaming-companion/outputs/poolA1', columnIndex: 1},
    {filename: 'apps/streaming-companion/outputs/poolB1', columnIndex: 10},
    {filename: 'apps/streaming-companion/outputs/poolA2', columnIndex: 19},
    {filename: 'apps/streaming-companion/outputs/poolB2', columnIndex: 28}
  ]
}
