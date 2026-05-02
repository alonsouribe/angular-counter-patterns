import { Component, signal } from '@angular/core';
import { CounterComponent } from './components/counter/counter';
import { CounterRxjsComponent } from './components/counter-rxjs/counter-rxjs';
import { CounterSignalComponent } from './components/counter-signal/counter-signal';
import { CounterServiceComponent } from './components/counter-service/counter-service';

@Component({
  selector: 'app-root',
  imports: [CounterComponent, CounterRxjsComponent, CounterServiceComponent, CounterSignalComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-counter-patterns');
}
