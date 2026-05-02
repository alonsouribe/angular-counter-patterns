import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-counter-rxjs',
  imports: [AsyncPipe],
  templateUrl: './counter-rxjs.html',
  styleUrl: './counter-rxjs.scss',
})
export class CounterRxjsComponent {
  count$ = new BehaviorSubject(0);

  increment() {
    this.count$.next(this.count$.value +1);
  }

  decrement() {
    if (this.count$.value > 0) {
      this.count$.next(this.count$.value - 1);
    }
  }

  reset() {
    this.count$.next(0);
  }
}
