import { CommonModule } from '@angular/common';
import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { StringTemplateOutletDirectiveModule } from '../../common/string-template-outlet.directive';
import { ButtonComponentModule } from '../button/button.component';
import { ModalComponent } from './modal.component';

export default {
  title: 'Modal',
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      declarations: [ModalComponent],
      imports: [
        CommonModule,
        ButtonComponentModule,
        StringTemplateOutletDirectiveModule
      ],
    }),
  ],
} as Meta;

const Template: Story<ModalComponent> = (args: ModalComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  title: 'Modal Title',
  bodyTemplate: 'Modal Body',
  width: '500px',
};
