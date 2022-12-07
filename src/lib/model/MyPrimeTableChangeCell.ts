export class MyPrimeTableChangeCell{
  keyValue: string;
  list: any[];
  row: any;

  constructor(row: any, keyValue: string, list: any[]) {
    this.keyValue = keyValue;
    this.row = row;
    this.list = list;
  }

}
