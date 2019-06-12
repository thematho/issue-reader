import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { IssueParserService } from '../../services/issue-parser.service';
import { FileHandler } from 'src/app/shared/file-reader/file-reader.component';
import { Issue } from '../../entities/Issue';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
  viewProviders: [{
    provide: FileHandler, useClass: IssueParserService
  }]
})
export class IssuesComponent implements OnInit, OnDestroy {
  issueList: Issue[];
  subscription: Subscription;

  constructor(public issueService: FileHandler) { }

  ngOnInit() {
    this.subscription = this.issueService.data.subscribe(issues => {
      this.issueList = issues;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
