import React, {useState} from 'react';
import classes from './../OnOff/OnOff.module.css'

export type OnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
    defaultOff?: boolean
}

export function UnControlledOnOff(props: OnOffPropsType) {

    let[on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

    const onStyle = {
        background: on ? 'green' : 'white'
    }
    const offStyle = {
        background: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        background: on ? 'green' : 'red'
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div className={classes.button}>
            <button style={onStyle} className={classes.button_item} onClick={onClicked}>On</button>
            <button style={offStyle} className={classes.button_item} onClick={offClicked}>Off</button>
            <button style={indicatorStyle} className={classes.button_item}></button>
        </div>
    )
}
