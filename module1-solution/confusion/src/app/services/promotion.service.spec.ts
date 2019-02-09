import { TestBed } from '@angular/core/testing';

import { PromotionService } from './promotion.service';

describe('PromotionhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromotionService = TestBed.get(PromotionService);
    expect(service).toBeTruthy();
  });
});
