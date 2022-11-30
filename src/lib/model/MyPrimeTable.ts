import { MyPrimeTableItem } from './MyPrimeTableItem';

export class MyPrimeTable{
  title?: string;
  xlsEnable?: boolean;
  xlsTitle?: string;
  xlsPrefixFilename?: string;
  xlsSuffixFilenameWithDate?: boolean;
  pdfEnable?: boolean;
  // pdfRowEnable?: boolean;
  items: MyPrimeTableItem[];
  noPagination?: boolean;
  rowsPerPageOptions?: number[];
  rows?: number;
  noDataText?: string;
}
