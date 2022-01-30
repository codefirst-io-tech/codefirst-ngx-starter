/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/omrumbakitemiz/codefirst-ngx-starter/blob/master/LICENSE
 */

import { Component } from '@angular/core';

import { ModalComponent } from './components/modal/modal.component';
import { ModalService } from './components/modal/modal.service';

@Component({
  selector: 'codefirst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'codefirst-ngx-starter';

  constructor(private modalService: ModalService) {}

  showModal(): void {
    const modalRef = this.modalService.show(ModalComponent);

    modalRef.onOk.subscribe(() => {
      console.log('OK');
    });
  }

  onCancel(): void {
    console.log('cancel');
  }

  onOk(): void {
    console.log('ok');
  }
}
