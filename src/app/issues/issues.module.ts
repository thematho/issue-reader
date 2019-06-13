import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule, MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule } from '@angular/material';

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
  ],
  providers: [
    DatePipe,
  ]
})
export class IssuesModule { } 
