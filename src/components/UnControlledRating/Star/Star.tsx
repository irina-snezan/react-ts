import React from 'react';

export type ValueType = 1 | 2 | 3 | 4 | 5;

export type StarPropsType = {
    selected: boolean
    value: ValueType
    setValue: (value: ValueType) => void
}

export function Star(props: StarPropsType) {
    return <span onClick={() => {
        props.setValue(props.value)
    }}>{props.selected ? <b>star </b> : 'star '}</span>
}