import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';
import {Accordion} from './Accordion';
import {action} from '@storybook/addon-actions';


export default {
    title: 'Accordion',
    component: Accordion
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired')
export const collapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback}/>;
export const unCollapsedMode = () =><Accordion titleValue={'Menu'} collapsed={false} onChange={callback}/>;

