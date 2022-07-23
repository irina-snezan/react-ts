import React, {useState} from 'react';
import classes from './OnOff.module.css'

type OnOffPropsType = {
    title1: string
    title2: string

}

function OnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(false);
    const onStyle = {
        background: on ? 'green' : 'white'
    }
    const offStyle = {
        background: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        background: on ? 'green' : 'red'
    }
    const buttonOnHandler = () => {
        setOn(true);
    }

    const buttonOffHandler = () => {
        setOn(false) ;
    }

    return (
        <div className={classes.button}>
            <button style={onStyle} className={classes.button_item} onClick={buttonOnHandler}>{props.title1}</button>
            <button style={offStyle} className={classes.button_item} onClick={buttonOffHandler}>{props.title2}</button>
            <button style={indicatorStyle} className={classes.button_item}></button>
        </div>
    )
}

export default OnOff;