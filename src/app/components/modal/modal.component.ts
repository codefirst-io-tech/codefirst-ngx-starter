/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/omrumbakitemiz/codefirst-ngx-starter/blob/master/LICENSE
 */

/* eslint @typescript-eslint/no-explicit-any: 0 */

import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output, TemplateRef } from '@angular/core';

import { StringTemplateOutletDirectiveModule } from '../../common/string-template-outlet.directive';
import { ButtonComponentModule, ButtonMode } from '../button/button.component';

@Component({
  selector: 'codefirst-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  ButtonMode = ButtonMode;

  @Input() title = '';
  @Input() bodyTemplate: TemplateRef<any> | null | string = null;
  @Input() type = 'info';
  @Input() width = '500px';
  @Input() height = 'auto';

  @Output() readonly cancel = new EventEmitter();
  @Output() readonly ok = new EventEmitter();
  @Output() readonly modalClose = new EventEmitter();
}

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, ButtonComponentModule, StringTemplateOutletDirectiveModule],
  exports: [ModalComponent]
})
export class ModalComponentModule {}
