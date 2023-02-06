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
    return !!this.list && this.list.length > 0 && !!this.prop && (!!this.prop.xlsEnable || !!this.prop.pdfEnable || !!this.prop.title)
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

  onClickCell(row: any, keyValue: string){
    this.clickRowCell.emit(new MyPrimeTableClickCell(row, keyValue));
  }

  onClickGB1(){
    this.clickGenericButton1.emit();
  }

  onClickGB2(){
    this.clickGenericButton2.emit();
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

    import('xlsx').then(xlsx => {

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

        const worksheet = xlsx.utils.json_to_sheet(estr);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        const EXCEL_EXTENSION = '.xlsx';
        const data: Blob = new Blob([excelBuffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, filename + EXCEL_EXTENSION);
    });
  }
}

