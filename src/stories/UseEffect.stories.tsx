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