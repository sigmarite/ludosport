import {GoogleSpreadsheetWorksheet} from 'google-spreadsheet';

export class PoolTablesWorksheet {
  private readonly maxNameLength = 20;

  constructor(private readonly worksheet: GoogleSpreadsheetWorksheet) {
  }

  getRanks(startingColumnIndex: number, startingRowIndex: number): string {
    const poolName = this.getPoolName(startingColumnIndex);
    const ranks: Rank[] = []

    for (let row = startingRowIndex; row < this.worksheet.rowCount; row++) {
      let athlete = this.worksheet.getCell(row, startingColumnIndex).formattedValue;
      let score: number = this.worksheet.getCell(row, startingColumnIndex + 1).value as number ?? 0;
      if (!!athlete) {
        ranks.push({athlete, score});
      }
    }
    ranks.sort((rank1, rank2) => rank2.score - rank1.score);

    return [poolName, ...ranks.map(rank => this.formatRank(rank))].join('\n');
  }

  private getPoolName(startingColumnIndex: number): string {
    return this.worksheet.getCell(1, startingColumnIndex).formattedValue;
  }

  private formatRank(rank: Rank): string {
    const sanitizedName = this.sanitize(rank.athlete);
    return `${sanitizedName}\t${rank.score}`;
  }


  private sanitize(athlete: string): string {
    return athlete.substring(0, this.maxNameLength).padEnd(this.maxNameLength, ' ');
  }
}

interface Rank {
  athlete: string;
  score: number;
}
