import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {SelfControlledAccordion, SelfControlledAccordionPropsType} from './SelfControlledAccordion';


export default {
    title: 'SelfControlledAccordion',
    component: SelfControlledAccordion
} as ComponentMeta<typeof SelfControlledAccordion>;

export const ModeChanging: Story<SelfControlledAccordionPropsType> = (args) => {
    return <SelfControlledAccordion {...args}/>
};

ModeChanging.args = {
    titleValue: 'Contacts'
}
