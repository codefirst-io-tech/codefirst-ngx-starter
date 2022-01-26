import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output, TemplateRef } from '@angular/core';
import { StringTemplateOutletDirectiveModule } from '../../common/string-template-outlet.directive';
import { ButtonComponentModule, ButtonMode } from '../button/button.component';

@Component({
  selector: 'immino-modal',
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

  @Output() cancel = new EventEmitter();
  @Output() ok = new EventEmitter();
  @Output() close = new EventEmitter();
}

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    ButtonComponentModule,
    StringTemplateOutletDirectiveModule
  ],
  exports: [ModalComponent]
})
export class ModalComponentModule {
}
