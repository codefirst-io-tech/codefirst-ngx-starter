import { Meta, Story } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: ButtonComponent,
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args
});

export const Primary = Template.bind({});
Primary.args = {
  mode: 'primary',
  size: 'medium',
  disabled: false,
  backgroundColor: 'white',
  label: 'ImminoButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  mode: 'secondary',
  size: 'medium',
  disabled: false,
  backgroundColor: 'white',
  label: 'ImminoButton',
};

export const Danger = Template.bind({});
Danger.args = {
  mode: 'danger',
  size: 'medium',
  disabled: false,
  backgroundColor: 'white',
  label: 'ImminoButton',
};

export const Warning = Template.bind({});
Warning.args = {
  mode: 'warning',
  size: 'medium',
  disabled: false,
  backgroundColor: 'white',
  label: 'ImminoButton',
};
