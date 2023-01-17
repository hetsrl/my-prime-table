# MyPrimeTable

Compatible with Angular 14

Author: Matteo Alderighi - Software Developer @ H&T srl Florence, Italy - 2022
GitHub: https://github.com/hetsrl/my-prime-table.git

## Documentation

### MyPrimeTable Object -- Base configuration of table

| Name                     | Type               | Example            | Description                                    |
|--------------------------|--------------------|--------------------|------------------------------------------------|
| title                    | string?            | 'Item table'       | table header title                             |
| xlsEnable                | boolean?           | true               | enable export xls                              |
| xlsTitle                 | string?            | 'Items_export'     | name export xls                                | 
| xlsPrefixFilename        | string?            | 'Report'           | prefix name export xls                         | 
| xlsSuffixFilenameWithDate| boolean?           | true               | enable date suffix of name xls                 | 
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

| Name                     | Type               | Example            | Description                                    |
|--------------------------|--------------------|--------------------|------------------------------------------------|
| label                    | string?            | 'surname'          | Title of column on header                      |





