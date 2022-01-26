import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output } from '@angular/core';

@Component({
  selector: 'immino-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  /**
   * What is the button mode?
   */
  @Input() mode: 'primary' | 'secondary' | 'danger' | 'warning' = 'primary';
  /**
   * What background color to use
   */
  @Input() backgroundColor?: string;
  /**
   * How large should the button be?
   */
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * Button contents
   *
   * @required
   */
  @Input() label = 'Button';
  /**
   * Optional click handler
   */
  @Output() onClick = new EventEmitter<Event>();
  /**
   * Is button disabled?
   *
   */
  @Input() disabled = false;

  // TODO: implement icon support with font-awesome
  // @Input() icon: string = '';
  // @Input() iconPosition: 'left' | 'right' = 'left';
  // @Input() iconSize: 'small' | 'medium' | 'large' = 'medium';
  // @Input() iconOnly = false;
  // @Input() iconColor: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' = 'primary';

  public get classes(): string {
    const classes = {
      primary: 'bg-immino-green/75 hover:bg-immino-green/100 text-white text-center py-2 px-4 rounded',
      secondary: 'bg-immino-blue/75 hover:bg-immino-blue/100 text-white text-center py-2 px-4 rounded',
      danger: 'bg-immino-red/75 hover:bg-immino-red/100 text-white text-center py-2 px-4 rounded',
      warning: 'bg-immino-yellow/75 hover:bg-immino-yellow/100 text-white text-center py-2 px-4 rounded',
    }
    return classes[this.mode];
  }
}

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [ButtonComponent]
})
export class ButtonComponentModule {
}
