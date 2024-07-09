/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable radix */
/* eslint-disable eqeqeq */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as FileSaver from 'file-saver';
import { MyPrimeTableChangeCell } from '../public-api';

import { MyPrimeTable } from './model/MyPrimeTable';
import { MyPrimeTableClickCell } from './model/MyPrimeTableClickCell';
import { MyPrimeTableItem } from './model/MyPrimeTableItem';

import * as Excel from "exceljs";

@Component({
  selector: 'my-prime-table',
  templateUrl: './my-prime-table.component.html',
  styleUrls: ['./my-prime-table.component.css'],
})
export class MyPrimeTableComponent implements OnInit, OnChanges {

  @Input() list: any[] = [];

  @Input() selectedList: any[] = [];
  @Output() selectedListChange: EventEmitter<any[]> = new EventEmitter<any[]>();

  @Input() prop: MyPrimeTable | undefined;

  @Output() clickExportPdf = new EventEmitter<any>();

  @Output() clickRowCell = new EventEmitter<any>();

  @Output() changeInput = new EventEmitter<any>();

  @Output() changeSort = new EventEmitter<any>();

  @Output() clickGenericButton1 = new EventEmitter<any>();
  @Output() clickGenericButton2 = new EventEmitter<any>();
  @Output() clickGenericButton3 = new EventEmitter<any>();
  @Output() clickGenericButton4 = new EventEmitter<any>();
  @Output() clickGenericButton5 = new EventEmitter<any>();
  @Output() clickGenericButton6 = new EventEmitter<any>();

  //showGlobal = false;

  showGlobal = true;

  constructor() {}

  ngOnInit(): void {
  }

  onSort(event) {
    this.changeSort.emit(event);
  }

  onRowSelect(event) {
    this.selectedListChange.emit(this.selectedList);
  }

  onRowUnselect(event) {
    this.selectedListChange.emit(this.selectedList);
  }

  onHeaderCheckboxToggle(event) {
    this.selectedListChange.emit(this.selectedList);
  }

  getShowCaption(){
    return !!this.list && this.list.length > 0 && !!this.prop &&
          (!!this.prop.xlsEnable || !!this.prop.pdfEnable || !!this.prop.title ||
            !!this.prop.genericButton1Enable || !!this.prop.genericButton2Enable || !!this.prop.genericButton3Enable || !!this.prop.genericButton4Enable
            || !!this.prop.genericButton5Enable || !!this.prop.genericButton6Enable
          )
  }

  getRowsPerPageOptions(){
    return this.prop?.rowsPerPageOptions && this.prop?.rowsPerPageOptions.length > 0 ? this.prop.rowsPerPageOptions : [5, 10, 25]
  }

  getRows(){
    return this.prop?.rows || 10
  }

  getNoDataText(){
    return this.prop?.noDataText || 'No data found!';
  }

  ngOnChanges(changes: SimpleChanges) {
    // this.showGlobal = false;
    // setTimeout(() =>{this.showGlobal = true})
    // console.log("ngOnChanges")
  }

  getItemsTable(){
    return this.prop && this.prop.items.filter(e => !e.onlyXls)
  }

  onChangeInput(row, keyValue){
    this.changeInput.emit(new MyPrimeTableChangeCell(row, keyValue, this.list));
  }

  onKeyDown(event: KeyboardEvent, row, keyValue) {
    if(event.key === 'Enter' || event.key === 'Escape' || event.key === 'Tab'){
      this.changeInput.emit(new MyPrimeTableChangeCell(row, keyValue, this.list));
    }
  }

  onClickCell(row: any, keyValue: string){
    this.clickRowCell.emit(new MyPrimeTableClickCell(row, keyValue));
  }

  onClickGB1(){
    this.clickGenericButton1.emit();
  }

  onClickGB2(){
    this.clickGenericButton2.emit();
  }

  onClickGB3(){
    this.clickGenericButton3.emit();
  }

  onClickGB4(){
    this.clickGenericButton4.emit();
  }

  onClickGB5(){
    this.clickGenericButton5.emit();
  }

  onClickGB6(){
    this.clickGenericButton6.emit();
  }

  exportPdf() {
    this.clickExportPdf.emit();
  }

  getValue(row: { [x: string]: any; }, item: MyPrimeTableItem){

    let val = row[item.keyValue]

    if(item.pipes && item.pipes.length > 0){

      item.pipes.forEach(p => {
        val = p.pipe.transform(val, p.args)
      })

    }

    return val;

  }

  exportExcel() {

    const estr = this.list.map(iter => {

        // eslint-disable-next-line prefer-const
        let obj: { [x: string]: any; } = { };
        this.prop && this.prop.items.forEach(e => {

          if(e.onlyTable || e.isIcon){
            return
          }

          obj[e.label] = iter[e.keyValue]

          if(e.xlsPipes && e.xlsPipes.length > 0){

            e.xlsPipes.forEach(p => {
              obj[e.label] = p.pipe.transform(obj[e.label], p.args)
            })

          }

        });

       return obj;
    })

    let filenameArray = [this.prop?.xlsPrefixFilename || '',
                              this.prop?.xlsTitle || '',
                              this.prop?.xlsSuffixFilenameWithDate ? '' + new Date().getTime() : '']

    filenameArray = filenameArray.filter(f=>!!f);

    let filename = ''
    if(filenameArray.length > 0){
      filename = filenameArray.join('_')
    }
    else{
      filename = "Report"
    }

    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const EXCEL_EXTENSION = '.xlsx';

    if((this.prop?.xlsLibrary || 'xlsx') === 'exceljs'){

      const workbook = new Excel.Workbook();
      const worksheet = workbook.addWorksheet(this.prop?.xlsSheetName || 'Sheet1');
      const keys = Object.keys(estr[0]);
      worksheet.columns = keys.map(e => {return { 'header': e, 'key': e }})
      worksheet.getRow(1).font = {name: 'Calibri', bold: true}; //{ header: 'Id', key: 'id', width: 10 },
      estr.forEach(row => worksheet.addRow(row))
      workbook.xlsx.writeBuffer().then(data => {
        const blob = new Blob([data], { type: EXCEL_TYPE });
        FileSaver.saveAs(blob, filename + EXCEL_EXTENSION);
      });

    }
    else if((this.prop?.xlsLibrary || 'xlsx') === 'xlsx'){

      import('xlsx').then(xlsx => {
          const worksheet = xlsx.utils.json_to_sheet(estr);
          const sheetname = this.prop?.xlsSheetName || 'Sheet1';
          const sheetObj = {}
          sheetObj[sheetname] = worksheet
          const workbook = { Sheets: sheetObj, SheetNames: [sheetname] };
          const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
          const data: Blob = new Blob([excelBuffer], {
              type: EXCEL_TYPE
          });
          FileSaver.saveAs(data, filename + EXCEL_EXTENSION);
      });

    }

  }
}

