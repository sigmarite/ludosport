import {GoogleSpreadsheetWorksheet} from 'google-spreadsheet';

export class PoolResultsWorksheet {

  constructor(private readonly worksheet: GoogleSpreadsheetWorksheet) {
  }

  getMatches(startingColumnIndex: number): PoolMatches {
    const poolName = this.getPoolName(startingColumnIndex);
    const matches: Match[] = [];

    for (let row = 1; row < this.worksheet.rowCount - 1; row++) {
      let firstAthleteName = this.worksheet.getCell(row, startingColumnIndex).formattedValue;
      let firstAthleteScore = this.worksheet.getCell(row, startingColumnIndex + 1).formattedValue ?? " ";
      let secondAthleteName = this.worksheet.getCell(row + 1, startingColumnIndex).formattedValue;
      let secondAthleteScore = this.worksheet.getCell(row + 1, startingColumnIndex + 1).formattedValue ?? " ";
      if (!!firstAthleteName && firstAthleteName !== 'SWITCH SJ' && !!secondAthleteName && secondAthleteName !== 'SWITCH SJ') {
        matches.push({
          firstAthleteName,
          firstAthleteScore,
          secondAthleteName,
          secondAthleteScore
        })
      }
    }

    return {
      name: poolName,
      matches
    }
  }

  private getPoolName(startingColumnIndex: number): string {
    return this.worksheet.getCell(0, startingColumnIndex).formattedValue;
  }
}

interface Match {
  firstAthleteName: string;
  firstAthleteScore: string;
  secondAthleteName: string;
  secondAthleteScore: string;
}

interface PoolMatches {
  name: string;
  matches: Match[];
}
