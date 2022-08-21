import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo2'
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret);

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    let [counter, setCounter] = useState(0);
    let [users, setUsers] = useState(['Ira', 'Oleg', 'Ivan']);

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
        return newArray
    }, [users]);

    const addUser = () => {
        let newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers);
    }

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </div>
}
