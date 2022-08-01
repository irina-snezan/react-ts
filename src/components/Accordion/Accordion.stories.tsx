import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from './Accordion';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired');
const onClickCallback = action('some item was clicked');

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />
const callbackProps = {
    onChange: callback
    // onClick: (value: any) => void
}
export const CollapsedMode = Template.bind({})
CollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Menu',
    collapsed: true,
    onClick: onClickCallback
};

export const UnCollapsedMode = Template.bind({});
UnCollapsedMode.args = {
    ...callbackProps,
    titleValue: 'Menu',
    collapsed: false,
    items: [{value: 1, title: 'Home'}, {value: 2, title: 'About us'}, {value: 3, title: 'Contacts'}]
};

export const ModeChanging: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion {...args} collapsed={value} onChange={() => setValue(!value)} onClick={value => alert(`this point of menu with ID ${value}`)}/>
};
ModeChanging.args = {
    titleValue: 'Menu',
    items: [{value: 1, title: 'Home'}, {value: 2, title: 'About us'}, {value: 3, title: 'Contacts'}],
}
