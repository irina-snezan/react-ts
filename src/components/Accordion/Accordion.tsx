import React from 'react';
import {AccordionTitle} from './AccordionTitle/AccordionTitle';
import {AccordionBody, ItemsType} from './AccordionBody/AccordionBody';


export type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemsType[]
    onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}



