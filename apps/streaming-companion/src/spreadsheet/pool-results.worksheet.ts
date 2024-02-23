import {GoogleSpreadsheetWorksheet} from 'google-spreadsheet';

export class PoolResultsWorksheet {
  private readonly maxNameLength = 20;

  constructor(private readonly worksheet: GoogleSpreadsheetWorksheet) {
  }

  getMatches(startingColumnIndex: number): string[] {
    const poolName = this.getPoolName(startingColumnIndex);
    const matches: string[] = [];

    for (let row = 1; row < this.worksheet.rowCount; row = row + 3) {
      let firstAthlete = this.worksheet.getCell(row, startingColumnIndex).formattedValue;
      let firstAthleteScore = this.worksheet.getCell(row, startingColumnIndex + 1).formattedValue ?? " ";
      let secondAthlete = this.worksheet.getCell(row + 1, startingColumnIndex).formattedValue;
      let secondAthleteScore = this.worksheet.getCell(row + 1, startingColumnIndex + 1).formattedValue ?? " ";
      matches.push(this.formatMatch(firstAthlete, firstAthleteScore, secondAthlete, secondAthleteScore))
    }

    return [poolName, ...matches];
  }

  private getPoolName(startingColumnIndex: number): string {
    return this.worksheet.getCell(0, startingColumnIndex).formattedValue;
  }

  private formatMatch(firstAthlete: string, firstAthleteScore: string, secondAthlete: string, secondAthleteScore: string): string {
    const sanitizedFirstAthleteName = this.sanitize(firstAthlete);
    const sanitizedSecondAthleteName = this.sanitize(secondAthlete);
    return `${sanitizedFirstAthleteName}\t${firstAthleteScore} - ${secondAthleteScore}\t${sanitizedSecondAthleteName}`;
  }


  private sanitize(secondAthlete: string): string {
    return secondAthlete.substring(0, this.maxNameLength).padEnd(this.maxNameLength, ' ');
  }
}
