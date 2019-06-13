import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Observable, BehaviorSubject } from 'rxjs';
import { FileHandler } from 'src/app/shared/file-reader/file-reader.component';
import { Issue } from '../entities/Issue';

@Injectable()
export class IssueParserService implements FileHandler {
  private DATE_FORMAT: string = 'dd-MM-yyyy';

  data: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);

  constructor(private datePipe: DatePipe) { }

  onLoadFile(reader: FileReader): Observable<any> {
    const csvText: string | ArrayBuffer = reader.result;
    if (typeof csvText === 'string') {
      const lines = csvText.replace(new RegExp('"', 'g'), '').split(/\r?\n|\r/);
      lines.shift();
      this.data.next(this.mapIssues(lines));
    } else {
      throw new Error("Wrong type of content on CSV File");
    }
    return null;
  }

  mapIssues(lines: Array<string>): Array<Issue> {
    return lines.map(line => {
      let values = line.split(',');
      return {
        firstName: values[0],
        surName: values[1],
        issueCount: Number(values[2]),
        birthDate: this.datePipe.transform(new Date(values[3]), this.DATE_FORMAT),
      };
    });
  }
}
