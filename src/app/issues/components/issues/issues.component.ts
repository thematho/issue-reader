import { Component, OnInit, Inject } from '@angular/core';
import { IssueParserService } from '../../services/issue-parser.service';
import { FileHandler } from 'src/app/shared/file-reader/file-reader.component';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
  viewProviders: [{
    provide: FileHandler, useClass: IssueParserService
  }]
})
export class IssuesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
