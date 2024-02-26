export interface Environment {
  spreadsheetId: string;
  poolResult: Pool;
  poolTables: PoolRanks;
}

export interface Pool {
  columnIndex: number
}

export interface PoolRanks {
  columnIndex: number;
  rowIndex: number;
}
