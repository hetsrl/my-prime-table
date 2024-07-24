# MyPrimeTable

Compatible with Angular 17

Author: Matteo Alderighi - Software Developer @ H&T srl Florence, Italy - 2022
GitHub: https://github.com/hetsrl/my-prime-table.git

## Documentation

### Example of use of the component

#### Inside the html file
```html
<my-prime-table 
  [list]="list" 
  [(selectedList)]="selectedList" 
  [(selected)]="selected" 
  [prop]="myTable" 
  (changeInput)="onChangeInput($event)" 
  (clickGenericButton1)="save()" 
  (clickGenericButton2)="export()" 
  (clickRowCell)="onClickRowPdf($event)" 
  (changeSort)="onChangeSort($event)"
  (rowSelect)="onRowSelect($event)"
  (rowUnselect)="onRowUnselect($event)"
  (headerCheckboxToggle)="onHeaderCT($event)"

></my-prime-table>``

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
| metaKeySelection         | string?            | id                 | metakey selection                              | 
| selectionMode            | "single", "multiple"   | "single"            | type of selection        | 
| noDataText               | string?            | 'No data found'    | text displayed when data not found             |
| styleClass               | string?            | 'p-datatable-sm p-datatable-striped'    | style of table            |
| genericButton1Enable      | boolean?           | true                | enable the first button in the table header     |
| genericButton1Icon        | string?            | 'pi pi-save'        | icon name for the first button                  |
| genericButton1Label       | string?            | 'Save'              | label text for the first button                 |
| genericButton2Enable      | boolean?           | true                | enable the second button in the table header    |
| genericButton2Icon        | string?            | 'pi pi-trash'       | icon name for the second button                 |
| genericButton2Label       | string?            | 'Delete'            | label text for the second button                |
| genericButton3Enable      | boolean?           | true                | enable the third button in the table header     |
| genericButton3Icon        | string?            | ''                  | icon name for the third button                  |
| genericButton3Label       | string?            | ''                  | label text for the third button                 |
| genericButton4Enable      | boolean?           | true                | enable the fourth button in the table header    |
| genericButton4Icon        | string?            | ''                  | icon name for the fourth button                 |
| genericButton4Label       | string?            | ''                  | label text for the fourth button                |
| genericButton5Enable      | boolean?           | true                | enable the fifth button in the table header     |
| genericButton5Icon        | string?            | ''                  | icon name for the fifth button                  |
| genericButton5Label       | string?            | ''                  | label text for the fifth button                 |
| genericButton6Enable      | boolean?           | true                | enable the sixth button in the table header     |
| genericButton6Icon        | string?            | ''                  | icon name for the sixth button                  |
| genericButton6Label       | string?            | ''                  | label text for the sixth button                 |
| headerClassLeft          | string?            | 'text-right'       | css class left header section                  |
| headerClassCenter        | string?            | 'text-right'       | css class center header section                |
| selectionDataKey         | string?            | 'text-right'       | dataKey name of row object on table for check  |
| isCheckable              | boolean?           | 'text-right'       | enable check on table                          |
| isCheckHiddenFunc        | (row)=>boolean?    | (row)=>row.id===1  | function that decide when display check on row |
| isGlobalCheckHiddenFunc  | (row)=>boolean?    | (row)=>state=='A'  | function that decide when display global check |
| isRowGroupSubheaderTable       | boolean?            | true                  | enable row group subheader on table                 |
| sortField                      | string?            | 'name'                  | name of property for sort on table with row group subheader               |
| scrollHeight                   | string?            | '40vh'                  | height of table with row group subheader               |
| groupRowsBy                    | string?            | 'name'                  | name of property for group by on table with row group subheader                |
| groupHeaderClass               | string?            | 'font-bold ml-2'                  | css class for group header on table with row group subheader                |
| groupRowsFooterClass           | string?            | 'text-right font-bold pr-6'                  | css class for group rows footer on table with row group subheader                |
| groupRowsFooter                | string?            | 'name'                  | name of property for group rows footer on table with row group subheader                |

##### MyPrimeTable Object -- Accessibility

| Name                     | Type               | Example            | Description                                    |
|--------------------------|--------------------|--------------------|------------------------------------------------|
| ariaLabel                | string?            | 'Item'             | label for the table header for accessibility purposes |
| ariaLabelledby           | string?            | 'id-1'             | references the ID of an element that labels the current element |
| ariaColcount             | string?, number?   | '40'               | number of columns in the table |
| ariaRowcount             | string?, number?   | '500'              | number of rows in the table |
| role                     | string?            | 'img'              | role of the element for accessibility purposes |
| id                       | string?, number?   | 'id-2'             | unique identifier for the element |
| xlsButtonAriaLabel       | string?            | 'Excel button'     | accessible label for the button that exports data to an Excel file |
| xlsButtonId              | string?, number?   | 'btn-id-1'         | unique ID to the Excel export button |
| pdfButtonAriaLabel       | string?            | 'PDF button'       | accessible label for the button that exports data to a PDF file |
| pdfButtonId              | string?, number?   | 'pdf-id-1'         | unique ID for the PDF export button |
| genericButton1AriaLabel   | string?            | 'Items button'      | accessible label to the first generic button        |
| genericButton1Id          | string?, number?   | 'items-id-1'        | unique ID to the first generic button               |
| genericButton2AriaLabel   | string?            | 'Guests button'     | accessible label for the second generic button      |
| genericButton2Id          | string?, number?   | 'guests-id-1'       | unique ID to the second generic button      |
| genericButton3AriaLabel   | string?            | ''                  | accessible label for the third generic button       |
| genericButton3Id          | string?, number?   | ''                  | unique ID to the third generic button       |
| genericButton4AriaLabel   | string?            | ''                  | accessible label for the fourth generic button      |
| genericButton4Id          | string?, number?   | ''                  | unique ID to the fourth generic button      |
| genericButton5AriaLabel   | string?            | ''                  | accessible label for the fifth generic button       |
| genericButton5Id          | string?, number?   | ''                  | unique ID to the fifth generic button       |
| genericButton6AriaLabel   | string?            | ''                  | accessible label for the sixth generic button       |
| genericButton6Id          | string?, number?   | ''                  | unique ID to the sixth generic button       |
| checkId                  | string?, number?   | 'check-id-1'       | unique identifier for the check |

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

##### MyPrimeTableItem Object -- Accessibility

| Name                     | Type               | Example            | Description                                    |
|--------------------------|--------------------|--------------------|------------------------------------------------|
| ariaLabel                | string?            | 'Item'             | label for the table header for accessibility purposes |
| ariaLabelledby           | string?            | 'id-1'             | references the ID of an element that labels the current element |
| role                     | string?            | 'img'              | role of the element for accessibility purposes |
| id                       | string?, number?   | 'id-2'             | unique identifier for the element |
| alt                      | string?            | 'Excel icon'       | alternative text for the element |
| sortIconAlt              | string?            | 'Sorting items'    | alternative text for the sorting icon |
| sortIconRole             | string?            | 'img'              | role of the sorting icon as an image for accessibility purposes |
| sortIconId               | string?, number?   | 'ico-id-1'         | unique ID to the sorting icon |
| inputAlt                 | string?            | 'Input item'       | alternative text for an input element |
| inputRole                | string?            | 'input'            | role for the input element |
| inputId                  | string?, number?   | 'input-id-1'       | unique identifier for the input element |
| inputAriaLabel           | string?            | 'Input item'       | accessible label for the input element |
| inputAriaLabelledby      | string?            | 'id-1'             | references the ID of an element that labels the input |

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

