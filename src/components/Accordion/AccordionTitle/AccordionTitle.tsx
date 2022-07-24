import React from 'react';

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    //console.log('AccordionTitle render');
    return (
        <div>
            <h3 onClick={(e) => props.onChange()}>{props.title} </h3>
        </div>
    );
}