import { TestBed } from '@angular/core/testing';

import { CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should start at 0', () => {
    expect(service.count()).toBe(0);
  });

  it('should increment count', () => {
    service.increment();
    expect(service.count()).toBe(1);
  });

  it('should decrement count', () => {
    service.increment();
    service.decrement();
    expect(service.count()).toBe(0);
  });

  it('should not go below 0', () => {
    service.decrement();
    expect(service.count()).toBe(0);
  });

  it('should reset count to 0', () => {
    service.increment();
    service.increment();
    service.reset();
    expect(service.count()).toBe(0);
  });
});
