import { MyPrimeTableItem } from './MyPrimeTableItem';

export class MyPrimeTable{
  title?: string;
  xlsEnable?: boolean;
  xlsTitle?: string;
  xlsPrefixFilename?: string;
  xlsSuffixFilenameWithDate?: boolean;
  xlsSheetName?: string;
  xlsLibrary?: string;
  pdfEnable?: boolean;
  items: MyPrimeTableItem[];
  noPagination?: boolean;
  rowsPerPageOptions?: number[];
  rows?: number;
  noDataText?: string;
  styleClass?: string;

  isRowGroupSubheaderTable?: boolean;
  sortField?: string;
  scrollHeight?: string;
  groupRowsBy?: string;
  groupHeaderClass?: string;
  groupRowsFooterClass?: string;
  groupRowsFooter?: string;

  selectionMode?: "single" | "multiple";
  metaKeySelection?: string;

  genericButton1Enable?: boolean;
  genericButton1Icon?: string;
  genericButton1Label?: string;
  genericButton2Enable?: boolean;
  genericButton2Icon?: string;
  genericButton2Label?: string;
  genericButton3Enable?: boolean;
  genericButton3Icon?: string;
  genericButton3Label?: string;
  genericButton4Enable?: boolean;
  genericButton4Icon?: string;
  genericButton4Label?: string;
  genericButton5Enable?: boolean;
  genericButton5Icon?: string;
  genericButton5Label?: string;
  genericButton6Enable?: boolean;
  genericButton6Icon?: string;
  genericButton6Label?: string;

  headerClassLeft?: string;
  headerClassCenter?: string;
  selectionDataKey?: string;
  isCheckable?: boolean;
  isCheckHiddenFunc?: (row: any) => boolean;
  isGlobalCheckHiddenFunc?: () => boolean;
  ariaLabel?: string;
  ariaLabelledby?: string;
  ariaColcount?: string | number;
  ariaRowcount?: string | number;
  role?: string;
  id?: string | number;
  xlsButtonAriaLabel?: string;
  xlsButtonId?: string | number;
  pdfButtonAriaLabel?: string;
  pdfButtonId?: string | number;

  genericButton1AriaLabel?: string;
  genericButton1Id?: string | number;
  genericButton2AriaLabel?: string;
  genericButton2Id?: string | number;
  genericButton3AriaLabel?: string;
  genericButton3Id?: string | number;
  genericButton4AriaLabel?: string;
  genericButton4Id?: string | number;
  genericButton5AriaLabel?: string;
  genericButton5Id?: string | number;
  genericButton6AriaLabel?: string;
  genericButton6Id?: string | number;

  checkId?: string | number;

}
