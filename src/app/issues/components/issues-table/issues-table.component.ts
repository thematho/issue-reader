import { Component, OnInit, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';

import { Issue } from '../../entities/Issue';

@Component({
  selector: 'app-issues-table',
  templateUrl: './issues-table.component.html',
  styleUrls: ['./issues-table.component.scss']
})
export class IssuesTableComponent implements OnInit, OnChanges {
  @Input() columns: any[] = [{
    key: 'firstName',
    header: 'First Name',
  }, {
    key: 'surName',
    header: 'Sur  Name',
  }, {
    key: 'issueCount',
    header: 'Issue Count',
  }, {
    key: 'birthDate',
    header: 'Date of birth',
  }];

  @Input('data') dataSource: MatTableDataSource<Issue> = new MatTableDataSource([]);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  displayedColumns: string[] = this.columns.map(col => col.key);

  constructor() { }

  filter(filterValue:string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      if (propName === 'dataSource') {
        this.dataSource.sort = this.sort;
      }
    }
  }
}
