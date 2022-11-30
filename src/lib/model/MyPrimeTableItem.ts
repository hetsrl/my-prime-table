import { MyTablePipeItem } from './MyPrimeTablePipeItem';

export class MyTableItem{
  label: string;
  keyValue: string;
  width?: string;
  class?: string;
  pipes?: Array<MyTablePipeItem>;
  xlsPipes?: Array<MyTablePipeItem>;
  onlyXls?: boolean;
  onlyTable?: boolean;
  isIcon?: boolean;
  onClick?: boolean;
  icon?: string;
  iconFontSize?: string;
  noSorting?: boolean;
}
