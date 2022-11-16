import React, {useEffect, useMemo, useState} from 'react';
import {clearInterval} from 'timers';

type PropsType = {}
const get2digitsString = (num: number) => num < 10 ? '0' + num : num;

const Clock: React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return (
        <div>
            <span>{get2digitsString(date.getHours())}</span>
            :
            <span>{get2digitsString(date.getMinutes())}</span>
            :
            <span>{get2digitsString(date.getSeconds())}</span>
        </div>
    );
};

export default Clock;

