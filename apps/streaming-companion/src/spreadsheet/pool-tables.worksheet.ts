import {GoogleSpreadsheetWorksheet} from 'google-spreadsheet';

export class PoolTablesWorksheet {

  constructor(private readonly worksheet: GoogleSpreadsheetWorksheet) {
  }

  getRanks(startingColumnIndex: number, startingRowIndex: number): PoolRanks {
    const poolName = this.getPoolName(startingColumnIndex);
    const ranks: Rank[] = []

    for (let row = startingRowIndex; row < this.worksheet.rowCount; row++) {
      let athlete = this.worksheet.getCell(row, startingColumnIndex).formattedValue;
      let score: string = this.worksheet.getCell(row, startingColumnIndex + 1).formattedValue ?? "0";
      if (score.startsWith('#')) {
        score = "0";
      }
      if (!!athlete) {
        ranks.push({athlete, score});
      }
    }
    ranks.sort((rank1, rank2) => (+rank2.score) - (+rank1.score));

    return {
      name: poolName,
      ranks
    }
  }

  private getPoolName(startingColumnIndex: number): string {
    return this.worksheet.getCell(1, startingColumnIndex).formattedValue;
  }
}

interface Rank {
  athlete: string;
  score: string;
}

interface PoolRanks {
  name: string;
  ranks: Rank[];
}
