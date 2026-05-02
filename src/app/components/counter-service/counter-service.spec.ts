import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterServiceComponent } from './counter-service';

describe('CounterServiceComponent', () => {
  let component: CounterServiceComponent;
  let fixture: ComponentFixture<CounterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterServiceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start at 0', () => {
    expect(component.counter.count()).toBe(0);
  })

  it('should increment count', () => {
    component.counter.increment();
    expect(component.counter.count()).toBe(1);
  })

  it('should decrement count', () => {
    component.counter.increment();
    component.counter.decrement();
    expect(component.counter.count()).toBe(0);
  })

  it('should not go below 0', () => {
    component.counter.decrement();
    expect(component.counter.count()).toBe(0);
  })

  it('should reset count to 0', () => {
    component.counter.increment();
    component.counter.increment();
    component.counter.reset();
    expect(component.counter.count()).toBe(0);
  })
});
