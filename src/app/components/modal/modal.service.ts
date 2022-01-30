/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/omrumbakitemiz/codefirst-ngx-starter/blob/master/LICENSE
 */

/* eslint @typescript-eslint/no-explicit-any: 0 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export function generateUUID(): string {
  // Public Domain/MIT
  let d = new Date().getTime(); //Timestamp
  let d2 = (typeof performance !== 'undefined' && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export interface ModalRef {
  id: string;
  onOk?: any;
  onCancel?: any;
  onClose?: any;
  status?: 'SHOW' | 'HIDE';
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  /* eslint-disable unused-imports/no-unused-vars */
  show(component: any, config?: any): ModalRef {
    return {
      id: generateUUID(),
      status: 'SHOW',
      onOk: new BehaviorSubject(null)
    };
  }
}
