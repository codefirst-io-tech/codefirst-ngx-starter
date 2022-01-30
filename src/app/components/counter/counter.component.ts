/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/omrumbakitemiz/codefirst-ngx-starter/blob/master/LICENSE
 */

/* eslint @typescript-eslint/no-explicit-any: 0 */

import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { decrement, increment, reset } from './counter.actions';

@Component({
  selector: 'codefirst-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment(): void {
    this.store.dispatch(increment());
  }

  decrement(): void {
    this.store.dispatch(decrement());
  }

  reset(): void {
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
