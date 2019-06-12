import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FileHandler } from 'src/app/shared/file-reader/file-reader.component';
import { Issue } from '../entities/Issue';

@Injectable()
export class IssueParserService implements FileHandler {
  public data: BehaviorSubject<Issue[]> = new BehaviorSubject<Issue[]>([]);
  constructor() { }

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
        birthDate: new Date(values[3]),
      };
    });
  }
}
