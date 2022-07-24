import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {SelfControlledAccordion} from './SelfControlledAccordion';


export default {
    title: 'SelfControlledAccordion',
    component: SelfControlledAccordion
} as ComponentMeta<typeof SelfControlledAccordion>;

export const ModeChanding = () => {
    return <SelfControlledAccordion titleValue={'Contacts'} />
}