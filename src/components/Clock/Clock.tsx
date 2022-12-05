import React, {useEffect, useState} from 'react';
import {clearInterval} from 'timers';
import {DigitalClockView} from './DigitalClockView';
import {AnalogAlClockView} from './AnalogAlClockView';

type PropsType = {
    mode?: 'analog' | 'digital'
}
export type ClockViewPropsType = {
    date: Date
}

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnalogAlClockView date={date}/>
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }
    return
    <div>
        {view}
    </div>
};




