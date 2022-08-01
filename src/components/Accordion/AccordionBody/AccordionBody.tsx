import React from 'react';

type AccordionBodyPropsType = {
    items: string[]
}

 export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map( ( i, index) => <li key={index}>{i}</li>)}
            </ul>
        </div>
    );
}