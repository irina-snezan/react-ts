import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input'
}


export const UncontrolledInput = () => <input/>;

export const ControlledInputWithFixedValue = () => <input value={'your message'}/>;

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue)
    }
    return <>
        <input value={value} onChange={onChangeHandler}/> - {value} </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    return <>
        <input id={'inputId'}/>
        <button onClick={(e) => {
            const el = document.getElementById('inputId') as HTMLInputElement;
            setValue(el.value)
        }}>save
        </button>
        - actual value: {value} </>
}

export const GetValueOfUncontrolledInputByButtonPress2 = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }
    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - {value} </>
}
