import React from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {UnControlledOnOff} from './UnControllerOnOff';
import {action} from '@storybook/addon-actions';
import {OnOffPropsType} from '../OnOff/OnOff';


export default {
    title: 'UnControlledOnOff',
    component: UnControlledOnOff
} as ComponentMeta<typeof UnControlledOnOff>;

const Template: Story<OnOffPropsType> = (args) => <UnControlledOnOff {...args} />;

const callback = action('on or off clicked');

const callbackProps = {
    onChange: callback
}
export const OnMode = Template.bind({});
OnMode.args = {
    ...callbackProps,
    defaultOn: true
}

export const OffMode = Template.bind({});
OffMode.args = {
    ...callbackProps,
    defaultOff: false
}
// export const DefaultInputValue = () => <input defaultInputValue={'yo'} />;