import { MyPrimeTablePipeItem } from './MyPrimeTablePipeItem';

export class MyPrimeTableItem{
  label: string;
  keyValue: string;
  width?: string;
  classHeader?: string;
  classHeaderFunc?: (element) => any;
  class?: string;
  classFunc?: (element) => any;
  pipes?: Array<MyPrimeTablePipeItem>;
  xlsPipes?: Array<MyPrimeTablePipeItem>;
  onlyXls?: boolean;
  onlyTable?: boolean;
  isIcon?: boolean;
  onClick?: boolean;
  onClickFunc?: (row) => boolean;
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

  //accessibility
  ariaLabel?:string;
  ariaLabelledby?:string;
  role?:string;
  id?:string|number;
  alt?:string;
  sortIconAlt?:string;
  sortIconRole?:string;
  sortIconId?:string|number;
  inputAlt?:string;
  inputRole?:string;
  inputId?:string|number;
  inputAriaLabel?:string;
  inputAriaLabelledby?:string;
}
