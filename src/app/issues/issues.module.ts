import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesComponent } from './components/issues/issues.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [IssuesComponent],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class IssuesModule { }
