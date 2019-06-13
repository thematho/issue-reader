import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Observable, BehaviorSubject } from 'rxjs';
import { FileHandler } from 'src/app/shared/file-reader/file-reader.component';
import { Issue } from '../entities/Issue';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class IssueFileHandler implements FileHandler {
  private DATE_FORMAT: string = 'dd-MM-yyyy';

  data: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);

  constructor(private datePipe: DatePipe, private snackBar: MatSnackBar) { }

  onLoadFile(reader: FileReader): Promise<any> {
    const csvText: string | ArrayBuffer = reader.result;
    if (typeof csvText === 'string') {
      try {
        const lines = csvText.replace(new RegExp('"', 'g'), '').split(/\r?\n|\r/);
        lines.shift();
        let issues = this.mapIssues(lines);
        this.data.next(issues);
        return Promise.resolve(issues);
      } catch (e) {
        this.snackBar.open('Error parsing the file, it does not contain the expected format', 'Close');
        return Promise.reject(e);
      }
    }
    return Promise.reject('Wrong type of content on CSV File');
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
