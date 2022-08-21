import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}
export const Example_2 = () => {
    let [a, setA] = useState<number>(5);
    let [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake<100000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a]);


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <div>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </div>
}