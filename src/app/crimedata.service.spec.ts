import { TestBed } from '@angular/core/testing';

import { CrimedataService } from './crimedata.service';

describe('CrimedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrimedataService = TestBed.get(CrimedataService);
    expect(service).toBeTruthy();
  });
});
