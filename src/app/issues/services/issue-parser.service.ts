import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FileHandler } from 'src/app/shared/file-reader/file-reader.component';

@Injectable({
  providedIn: 'root'
})
export class IssueParserService implements FileHandler {
  onLoadFile(reader: FileReader): Observable<any> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
