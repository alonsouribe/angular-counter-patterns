import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-counter-service',
  imports: [],
  templateUrl: './counter-service.html',
  styleUrl: './counter-service.scss'
})
export class CounterServiceComponent {
  counter = inject(CounterService);
}
