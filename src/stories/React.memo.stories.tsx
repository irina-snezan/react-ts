import React, {useState} from 'react';

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: {count:number}) => {
    return <div>
        {props.count}
    </div>
}

const UsersSecret = (props: {users: Array<string>}) => {
    return <div>
        {props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users= React.memo(UsersSecret);

export const Example_1 = () => {
    let [counter, setCounter] = useState(0);
    let [users, setUsers] = useState(['Ira', 'Oleg', 'Ivan'])
    const addUserHandler = () => {
        let newUsers = [...users, 'Sveta' +' ' + new Date().getTime()]
        setUsers(newUsers);
    }
    return <div>
        <button onClick={() => {setCounter(counter+1)}}>+</button>
        <button onClick={addUserHandler}>add user</button>
        <NewMessagesCounter count={counter} />
        <Users users={users}/>
    </div>
}