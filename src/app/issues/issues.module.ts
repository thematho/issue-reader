import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { IssuesComponent } from './components/issues/issues.component';

@NgModule({
  declarations: [
    IssuesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class IssuesModule { } 
