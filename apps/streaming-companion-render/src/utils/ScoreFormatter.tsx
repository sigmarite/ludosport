export function stringToNumber(str: string): number {
  str = str.replace(",",".")
  return Number(str);
}