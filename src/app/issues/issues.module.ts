import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IssuesComponent } from './components/issues/issues.component';
import { IssueParserService } from './services/issue-parser.service';
import { FileHandler } from '../shared/file-reader/file-reader.component';

@NgModule({
  declarations: [
    IssuesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: []
})
export class IssuesModule { } 
