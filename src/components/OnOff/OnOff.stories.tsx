import React, {useState} from 'react';
import {OnOff, OnOffPropsType} from './OnOff';
import {ComponentMeta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {AccordionPropsType} from '../Accordion/Accordion';

export default {
    title: 'OnOff',
    component: OnOff
} as ComponentMeta<typeof OnOff>;

const callback = action('on or of clicked');
const Template: Story<OnOffPropsType> = (args) => <OnOff {...args} />

const callbackProps = {
    title1: 'on',
    title2:'off',
    onChange: callback
}

export const OnMode = Template.bind({});
OnMode.args = {
    ...callbackProps,
    on: true
}

export const OffMode = Template.bind({});
OffMode.args = {
    ...callbackProps,
    on: false
}

//export const OnMode = () => <OnOff  on={true} onChange={callback}/>;
//export const OffMode = () => <OnOff title1={'on'} title2={'off'} on={false} onChange={callback}/>;

export const ModeChanging: Story<OnOffPropsType> = (args) => {
    let [switchOn, setSwitchOn] = useState<boolean>(true);
    return <OnOff {...args} on={switchOn} onChange={setSwitchOn}/>;
}
ModeChanging.args = {
    ...callbackProps,
}
