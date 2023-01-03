import { MyPrimeTablePipeItem } from './MyPrimeTablePipeItem';

export class MyPrimeTableItem{
  label: string;
  keyValue: string;
  width?: string;
  class?: string;
  pipes?: Array<MyPrimeTablePipeItem>;
  xlsPipes?: Array<MyPrimeTablePipeItem>;
  onlyXls?: boolean;
  onlyTable?: boolean;
  isIcon?: boolean;
  onClick?: boolean;
  icon?: string;
  iconFontSize?: string;
  noSorting?: boolean;
  isInputText?: boolean;
  inputTextDisableFunc?: (row) => boolean;
  typeInputText?: string;
  placeholder?: string;
  isHiddenFunc?: (row) => boolean;
  isInputSwitch?: boolean;
  trueValue?: string;
  falseValue?: string;
  textColorFunc?: (row) => any;
}
