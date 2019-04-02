import { TestBed } from '@angular/core/testing';

import { ManufaturerService } from './manufaturer.service';

describe('ManufaturerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManufaturerService = TestBed.get(ManufaturerService);
    expect(service).toBeTruthy();
  });
});
