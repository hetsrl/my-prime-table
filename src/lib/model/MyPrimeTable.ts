import { MyPrimeTableItem } from './MyPrimeTableItem';

export class MyPrimeTable{
  title?: string;
  xlsEnable?: boolean;
  xlsTitle?: string;
  xlsPrefixFilename?: string;
  xlsSuffixFilenameWithDate?: boolean;
  xlsSheetName?: string;
  pdfEnable?: boolean;
  // pdfRowEnable?: boolean;
  items: MyPrimeTableItem[];
  noPagination?: boolean;
  rowsPerPageOptions?: number[];
  rows?: number;
  noDataText?: string;

  genericButton1Enable?: boolean;
  genericButton1Icon?: string;
  genericButton1Label?: string;
  genericButton2Enable?: boolean;
  genericButton2Icon?: string;
  genericButton2Label?: string;

  headerClassLeft?: string;
  headerClassCenter?:string;

  selectionDataKey?:string;
  isCheckable?: boolean;

  isCheckHiddenFunc?: (row) => boolean;

}
