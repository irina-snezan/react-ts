import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo'
}
 function generateData() {
    console.log('generateData');
    return 328492732
 }

export const Example1 = () => {
    console.log('Example1')
    const initialValue = useMemo(generateData, [])
    let [counter, setCounter] = useState(initialValue);

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </div>
}
export const Example2 = () => {
    console.log('Example2')
    let [counter, setCounter] = useState(generateData);

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </div>
}


function generateData2() {
    console.log('generateData2');
    return 1
}

export const Example3 = () => {
    console.log('Example3');

    let [counter, setCounter] = useState(generateData2);

    return <div>

        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </div>
}