import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.actions';

@Component({
  selector: 'immino-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [CounterComponent],
  providers: [],
  exports: [CounterComponent]
})
export class CounterComponentModule {}