import React, {useState} from 'react';

export type SelfControlledAccordionPropsType = {
    titleValue: string
}

export function SelfControlledAccordion(props: SelfControlledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState(true);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                setCollapsed(!collapsed)
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}