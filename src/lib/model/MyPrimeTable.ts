import { MyTableItem } from './MyPrimeTableItem';

export class MyTable{
  title?: string;
  xlsEnable?: boolean;
  xlsTitle?: string;
  xlsPrefixFilename?: string;
  xlsSuffixFilenameWithDate?: boolean;
  pdfEnable?: boolean;
  // pdfRowEnable?: boolean;
  items: MyTableItem[];
  noPagination?: boolean;
  rowsPerPageOptions?: number[];
  rows?: number;
  noDataText?: string;
}
