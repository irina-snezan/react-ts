import React, {useCallback, useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    console.log('SimpleExample')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        console.log('useEffect every render');
        document.title=counter.toString();
    });

    useEffect(() => {
        console.log('useEffect only first render (componentDidMound');
        document.title=counter.toString();
    }, []);
    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title=counter.toString();
    },[counter]);

    return <div>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
       <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
}

export const SetTimeoutExample = () => {
    console.log('SetTimeoutExample')
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        setTimeout( () => {
            console.log('setTimeout');
            document.title=counter.toString();
        }, 1000);

    },[counter]);

    return <div>
        Hello, {counter} {fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
}

export const SetIntervalExample = () => {
    console.log('SetIntervalExample')
    const [counter, setCounter] = useState(1);

    // useEffect(() => {
    //     setInterval( () => {
    //         console.log('tick: ' + counter);
    //         setCounter((state) => state + 1)
    //     }, 1000);
    //
    // },[]);

    return <div>
        Hello, counter: {counter}
    </div>
}