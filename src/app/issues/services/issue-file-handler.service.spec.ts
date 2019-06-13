import { TestBed } from '@angular/core/testing';

import { IssueParserService } from './issue-parser.service';

describe('IssueParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IssueParserService = TestBed.get(IssueParserService);
    expect(service).toBeTruthy();
  });
});
