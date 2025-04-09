import { NgModule } from '@angular/core';
import { MyPrimeTableComponent } from './my-prime-table.component';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MyPrimeTableComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    PanelModule,
    InputSwitchModule,
    FormsModule,
    //BrowserAnimationsModule,
  ],
  exports: [
    MyPrimeTableComponent,
    TableModule,
    ButtonModule,
    PaginatorModule,
    InputTextModule,
    PanelModule,
    InputSwitchModule,
  ],
})
export class MyPrimeTableModule { }
