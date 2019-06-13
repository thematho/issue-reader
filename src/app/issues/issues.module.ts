import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {
  MatCardModule, MatTableModule, MatSortModule,
  MatFormFieldModule, MatInputModule, MatSnackBarModule, MatPaginatorModule,
} from '@angular/material';

import { SharedModule } from '../shared/shared.module';
import { IssuesComponent } from './components/issues/issues.component';
import { IssuesTableComponent } from './components/issues-table/issues-table.component';

@NgModule({
  declarations: [
    IssuesComponent,
    IssuesTableComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatPaginatorModule,
  ],
  providers: [
    DatePipe,
  ]
})
export class IssuesModule { } 
