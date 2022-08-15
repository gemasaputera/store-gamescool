import { Meta } from '@storybook/react';
import FeaturedItem, {
  Props
} from '../../../../components/molecules/FeaturedItem';

export default {
  title: 'Component/Molecules/FeaturedItem',
  component: FeaturedItem
} as Meta;

const Template = (args: Props) => <FeaturedItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Super Mechs',
  category: 'Mobile',
  img: '/img/Thumbnail-1.png'
};
