import { Meta } from '@storybook/react';
import StepItem, { Props } from '../../../../components/molecules/StepItem';

export default {
  title: 'Component/Molecules/StepItem',
  component: StepItem
} as Meta;

const Template = (args: Props) => <StepItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: '3. Be a Winner',
  icon: '/icon/step-03.svg',
  description1: 'Siap digunakan untuk',
  description2: 'improve permainan kamu'
};
