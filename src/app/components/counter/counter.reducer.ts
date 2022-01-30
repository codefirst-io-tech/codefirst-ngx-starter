/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/omrumbakitemiz/codefirst-ngx-starter/blob/master/LICENSE
 */

/* eslint @typescript-eslint/no-explicit-any: 0 */

import { createReducer, on } from '@ngrx/store';

import { increment, decrement, reset } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer(
  initialState,
  on(increment, state => state + 1),
  on(decrement, state => state - 1),
  on(reset, () => 0)
);

export function counterReducer(state: any, action: any): number {
  return _counterReducer(state, action);
}
