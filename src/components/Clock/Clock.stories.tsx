import React, {useState} from 'react';
import Clock from './Clock';



export default {
    title: 'Clock',
    component: Clock
} as ComponentMeta<typeof Clock>;

export const BaseExample = () => {
    return <Clock/>;
}