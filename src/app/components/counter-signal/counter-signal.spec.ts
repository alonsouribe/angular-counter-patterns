import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterSignalComponent } from './counter-signal';

describe('CounterSignal', () => {
  let component: CounterSignalComponent;
  let fixture: ComponentFixture<CounterSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterSignalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterSignalComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start at 0', () => {
    expect(component.count()).toBe(0);
  })

  it('should increment count', () => {
    component.increment();
    expect(component.count()).toBe(1);
  })

  it('should decrement count', () => {
    component.increment();
    component.decrement();
    expect(component.count()).toBe(0);
  })

  it('should not got below 0', () => {
    component.decrement();
    expect(component.count()).toBe(0);
  })

  it('should reset count to 0', () => {
    component.increment();
    component.increment();
    component.reset()
    expect(component.count()).toBe(0);
  })

  it('should return double the count', () => {
    component.increment();
    component.increment();
    expect(component.isDouble()).toBe(4);
  })
});
