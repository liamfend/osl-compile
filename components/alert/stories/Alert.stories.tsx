import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Alert  from '../Alert';

export default {
  title: 'no/Alert',
  component: Alert, 
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Alerts = Template.bind({});
Alerts.args = {
  txt:  'aaa',
   
}; 
