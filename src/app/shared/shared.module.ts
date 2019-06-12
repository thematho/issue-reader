import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileReaderComponent, FileHandler } from './file-reader/file-reader.component';
import { MatInputModule, MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    FileReaderComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [
    FileReaderComponent,
  ],
  providers: [
    FileHandler
  ]
})
export class SharedModule { }
