import { NgModule } from '@angular/core';
import { MyPrimeTableComponent } from './my-prime-table.component';

import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import {InputTextModule} from 'primeng/inputtext';
import {PanelModule} from 'primeng/panel';
import {InputSwitchModule} from 'primeng/inputswitch';


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
