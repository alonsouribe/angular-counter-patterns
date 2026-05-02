import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterRxjsComponent } from './counter-rxjs';

describe('CounterRxjs', () => {
  let component: CounterRxjsComponent;
  let fixture: ComponentFixture<CounterRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterRxjsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRxjsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start at 0', () => {
    expect(component.count$.value).toBe(0);
  })

  it('should increment count', () => {
    component.increment();
    expect(component.count$.value).toBe(1);
  })

  it('should decrement count', () => {
    component.increment();
    component.decrement();
    expect(component.count$.value).toBe(0);
  })

  it('should not go below 0', () => {
    component.decrement();
    expect(component.count$.value).toBe(0);
  })

  it('should reset count to 0', () => {
    component.increment();
    component.increment();
    component.reset();
    expect(component.count$.value).toBe(0);
  })
});
