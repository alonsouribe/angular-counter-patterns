import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter-signal',
  imports: [],
  templateUrl: './counter-signal.html',
  styleUrl: './counter-signal.scss',
})
export class CounterSignalComponent {

  count = signal(0);
  isDouble = computed(() => this.count() * 2);

  increment() {
    this.count.update(value => value +1);
  }

  decrement() {
    this.count.update(value => value > 0 ? value - 1 : 0);
  }

  reset() {
    this.count.set(0);
  }
}
