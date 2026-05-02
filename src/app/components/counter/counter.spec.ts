import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter';

describe('Counter', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start at 0', () => {
    expect(component.count).toBe(0);
  })

  it('should increment count', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should decrement count', () => {
    component.increment();
    component.decrement();
    expect(component.count).toBe(0);
  })

  it('should not go below 0', () => {
    component.decrement();
    expect(component.count).toBe(0);
  })

  it('should rest count to 0', () => {
    component.increment();
    component.increment();
    component.reset();
    expect(component.count).toBe(0);
  })
});
