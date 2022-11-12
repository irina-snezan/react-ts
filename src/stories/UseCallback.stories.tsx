import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'useCallback'
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    let [counter, setCounter] = useState(0);
    let [books, setBooks] = useState(['JS', 'CSS', 'HTML']);

    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         console.log(books)
    //         const newUsers = [...books, 'Angular' + new Date().getTime()];
    //         setBooks(newUsers)
    //     }
    // }, [books]);

    const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            const newUsers = [...books, 'Angular' + new Date().getTime()];
            setBooks(newUsers)
    }, [books]);

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </div>
}

type BookSecretPropsType = {
    addBook: () => void
}

const BookSecret = (props:BookSecretPropsType) => {
    console.log('BookSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BookSecret)