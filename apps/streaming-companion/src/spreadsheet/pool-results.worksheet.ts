import {GoogleSpreadsheetWorksheet} from 'google-spreadsheet';

export class PoolResultsWorksheet {

  constructor(private readonly worksheet: GoogleSpreadsheetWorksheet) {
  }

  getMatches(startingColumnIndex: number, switchRow: number, endRow: number): PoolMatches {
    const poolName = this.getPoolName(startingColumnIndex);
    const matches: Match[] = [];

    // todo find a better way to get the couples and skip the sj switch
    for (let row = 1; row < switchRow; row = row + 3) {
      let firstAthleteName = this.worksheet.getCell(row, startingColumnIndex).formattedValue;
      let firstAthleteScore = this.worksheet.getCell(row, startingColumnIndex + 1).formattedValue ?? " ";
      let secondAthleteName = this.worksheet.getCell(row + 1, startingColumnIndex).formattedValue;
      let secondAthleteScore = this.worksheet.getCell(row + 1, startingColumnIndex + 1).formattedValue ?? " ";
      matches.push({
        firstAthleteName,
        firstAthleteScore,
        secondAthleteName,
        secondAthleteScore
      })
    }

    for (let row = switchRow + 1; row < endRow; row = row + 3) {
      let firstAthleteName = this.worksheet.getCell(row, startingColumnIndex).formattedValue;
      let firstAthleteScore = this.worksheet.getCell(row, startingColumnIndex + 1).formattedValue ?? " ";
      let secondAthleteName = this.worksheet.getCell(row + 1, startingColumnIndex).formattedValue;
      let secondAthleteScore = this.worksheet.getCell(row + 1, startingColumnIndex + 1).formattedValue ?? " ";
      matches.push({
        firstAthleteName,
        firstAthleteScore,
        secondAthleteName,
        secondAthleteScore
      })
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
