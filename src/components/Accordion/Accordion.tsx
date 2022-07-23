import React from 'react';
import {AccordionTitle} from './AccordionTitle/AccordionTitle';
import {AccordionBody} from './AccordionBody/AccordionBody';


export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}



