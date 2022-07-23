import React, {useState} from 'react';
import './App.css';
import {AppTitle} from './components/AppTitle/AppTitle';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';



function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [collapsed, setCollapsed] = useState<boolean>(true)
    return (
        <div className="App">
            <AppTitle title={'This is component.'}/>
            <h2>Article 1</h2>
            <Rating value={ratingValue} onClick={setRatingValue} />
            <h2>Article 2</h2>
            <Accordion titleValue={'Menu'} collapsed={collapsed} onChange={() =>{setCollapsed(!collapsed)}} />
        </div>
    );
}

export default App;
