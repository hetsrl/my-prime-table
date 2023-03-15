# MyPrimeTable

Compatible with Angular 14

Author: Matteo Alderighi - Software Developer @ H&T srl Florence, Italy - 2022
GitHub: https://github.com/hetsrl/my-prime-table.git

## Documentation

### Example of use of the component

#### Inside the html file
``<my-prime-table [list]="list" [(selectedList)]="selectedList" [prop]="myTable" (changeInput)="onChangeInput($event)" (clickGenericButton1)="save()" (clickGenericButton2)="export()" (clickRowCell)="onClickRowPdf($event)" (changeInput)="onChangeInput($event)" (changeSort)="onChangeSort($event)"></my-prime-table>``

#### Inside the ts file
```javascript
myTable: MyPrimeTable = {
    noDataText: 'No data found!',
    title: 'Item extraction',
    genericButton1Enable: true,
    genericButton1Icon: 'pi pi-save',
    genericButton1Label: 'Save',
    selectionDataKey: 'item_code',
    isCheckable: true,
    items: [
      {
        label: 'Item code',
        keyValue: 'item code', 
        class: "text-right",
        isInputText: true,
        typeInputText: 'text',
        placeholder: '0',
      },
      {
        label: 'Purchase date,
        keyValue: 'purchase_date',
        isInputText: true,
        typeInputText: 'date',
        placeholder: '__/__/____',
        pipes: [new MyPrimeTablePipeItem(new MyDatePipe(),['dd/MM/yyyy'])],
      },
      {
        label: 'Point of sale',
        keyValue: 'pos_code',
        class: "text-right",
        textColorFunc: (row) => row['pos_close'] === 'NO' ? null : 'red',
      },
      {
        label: 'Item price',
        keyValue: 'item_price',
        class: "text-right",
        pipes: [new MyPrimeTablePipeItem(new CoalescePipe(),[0]), new MyPrimeTablePipeItem(new MyDecimalPipe(),['1.3-3'])],
      },
      {
        label: '',
        isIcon: true,
        noSorting: true,
        onClick: true,
        icon: 'pi pi-external-link',
        iconFontSize: '1rem',
        keyValue: 'icon-detail',
        class: "text-center",
      },
      {
        label: 'Delivered',
        keyValue: 'delivered',
        isInputSwitch: true,
        trueValue: "Y",
        falseValue: "N",
        class: "text-center",
      },
      {
        label: 'Internal_code',
        keyValue: 'internal_code',
      },
      {
        label: '',
        isIcon: true,
        noSorting: true,
        onClick: true,
        icon: 'pi pi-pencil',
        iconFontSize: '1rem',
        keyValue: 'icon-internal_code',
        class: "text-center",
        isHiddenFunc: (row) => !!row['internal_code']
      },

    ]
  }
```

### MyPrimeTable Object -- Base configuration of table

| Name                     | Type               | Example            | Description                                    |
|--------------------------|--------------------|--------------------|------------------------------------------------|
| title                    | string?            | 'Item table'       | table header title                             |
| xlsEnable                | boolean?           | true               | enable export xls                              |
| xlsTitle                 | string?            | 'Items_export'     | name export xls                                | 
| xlsPrefixFilename        | string?            | 'Report'           | prefix name export xls                         | 
| xlsSuffixFilenameWithDate| boolean?           | true               | enable date suffix of name xls                 | 
| xlsSheetName             | string?            | true               | name of the sheet inside the xls export        | 
| xlsLibrary               | string?            | 'xlsx' or 'exceljs' | name of npm library used for xls export       | 
| pdfEnable                | boolean?           | true               | enable pdf export button on header             | 
| items                    | MyPrimeTableItem[] | See doc below      | table column configuration objects list        | 
| noPagination             | boolean?           | true               | disable table pagination                       | 
| rowsPerPageOptions       | number[]?          | [5,10,15]          | list options rows per page of table            | 
| rows                     | number?            | 10                 | default number of rows per page tables         | 
| noDataText               | string?            | 'No data found'    | text displayed when data not found             |
| genericButton1Enable     | boolean?           | true               | enable first button on table header            |
| genericButton1Icon       | string?            | 'pi pi-save'       | icon name of first button                      |
| genericButton1Label      | string?            | 'Save'             | label text of first button                     |
| genericButton2Enable     | boolean?           | true               | enable second button on table header           |
| genericButton2Icon       | string?            | 'pi pi-trash'      | icon name of second button                     |
| genericButton2Label      | string?            | 'Delete'           | label text of second button                    |
| headerClassLeft          | string?            | 'text-right'       | css class left header section                  |
| headerClassCenter        | string?            | 'text-right'       | css class center header section                |
| selectionDataKey         | string?            | 'text-right'       | dataKey name of row object on table for check  |
| isCheckable              | boolean?           | 'text-right'       | enable check on table                          |
| isCheckHiddenFunc        | (row)=>boolean?    | (row)=>row.id===1  | function that decide when display check on row |

### MyPrimeTableItem Object -- Base configuration of table item

| Name                     | Type                         | Example            | Description                                       |
|--------------------------|------------------------------|--------------------|---------------------------------------------------|
| label                    | string                       | 'Surname'          | title of column on header                         |
| keyValue                 | string                       | 'surname'          | name of property on rows                          |
| width                    | string?                      | '400px'            | optional width of column                          |
| class                    | string?                      | 'text-right'       | css class of column                               |
| pipes                    | Array<MyPrimeTablePipeItem>? | See doc below      | pipe array to transform the data output on table  |
| xlsPipes                 | Array<MyPrimeTablePipeItem>? | See doc below      | pipe array to transform the data output on xls    |
| onlyXls                  | boolean?                     | true               | column displayed only on xls                   |
| onlyTable                | boolean?                     | true               | column displayed only on table                 |
| isIcon                   | boolean?                     | true               | if the column displays an icon                 |
| onClick                  | boolean?                     | true               | whether the onClick event should be thrown on the cell |
| icon                     | string?                      | 'pi pi-file-pdf'   | icon displayed in the column                       |
| iconFontSize             | string?                      | '1rem'             | icon font size                                 |
| noSorting                | boolean?                     | true               | unsortable column                              |
| isInputText              | boolean?                     | true               | column contains an input text                  |
| inputTextDisableFunc     | (row)=>boolean?              | (row)=>row.id!==1  | function to disable input text on a certain cell  |
| typeInputText            | string?                      | 'number'           | input text type                      |
| placeholder              | string?                      | '__/__/____'       | placeholder for column with input text         |
| isHiddenFunc             | (row)=>boolean?              | (row)=>row.id!==1  | function to hide the cell contents             |
| isInputSwitch            | boolean?                     | true               | if column is input switch                      |
| trueValue                | string?                      | 'Y'                | value for true on input switch                 |
| falseValue               | string?                      | 'N'                | value for false on input switch                |
| textColorFunc            | (row)=>any?                  | (row)=>row.id!==1 ? 'red' : null | works to decide the color of the text in the cell |

### MyPrimeTablePipeItem Object -- Base configuration of pipe item

| Name                     | Type                         | Example            | Description                                       |
|--------------------------|------------------------------|--------------------|---------------------------------------------------|
| pipe                     | PipeTransform                | new MyDatePipe()   | pipe to be applied to the output                  |
| args                     | Array<any> | undefined       | ['dd/MM/yyyy']     | array of optional arguments for pipe              |

### MyPrimeTableClickCell Object -- Object returned by the onClick event of a cell

| Name                     | Type                         | Example            | Description                                       |
|--------------------------|------------------------------|--------------------|---------------------------------------------------|
| keyValue                 | string                       | 'surname'          | name of property clicked on rows                  |
| row                      | any                          | {surname:'WHITE',name:'PAUL'}  | object of the row containing the clicked cell     |

### MyPrimeTableChangeCell Object -- Object returned from the onChange event of a cell

| Name                     | Type                         | Example            | Description                                       |
|--------------------------|------------------------------|--------------------|---------------------------------------------------|
| keyValue                 | string                       | 'surname'          | name of property clicked on rows                  |
| row                      | any                          | {surname:'WHITE',name:'PAUL'}  | object of the row containing the clicked cell     |
| list                     | any[]                        | [{surname:'WHITE',name:'PAUL'},{surname:'RED',name:'BOB'}] | list of objects representing the data of the whole table |

