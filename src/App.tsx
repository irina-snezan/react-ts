import React, {useState} from 'react';
import './App.css';
import {AppTitle} from './components/AppTitle/AppTitle';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {UnControllerRating} from './components/UnControllerRating/UnControllerRating';
import {SelfControlledAAccordion} from './components/SelfControlledAccordion/SelfControlledAccordion';
import UnControllerOnOff from './components/UnControllerOnOff/UnControllerOnOff';
import OnOff from './components/OnOff/OnOff';


function App(props: any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [collapsed, setCollapsed] = useState<boolean>(true);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">
            <AppTitle title={'This is component.'}/>
            <h2>Article 1</h2>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UnControllerRating value={props.value}/>
            <UnControllerRating value={props.value}/>
            <h2>Article 2</h2>
            <Accordion titleValue={'Menu'} collapsed={collapsed} onChange={() => {
                setCollapsed(!collapsed)
            }}/>
            <SelfControlledAAccordion titleValue={'Menu'}/>
            <SelfControlledAAccordion titleValue={'Contacts'}/>
            <h2>Article 3</h2>
            <OnOff title1={'On'} title2={'Off'}/>
            <OnOff title1={'On'} title2={'Off'}/>
            <UnControllerOnOff title1={'On'} title2={'Off'} on={switchOn} onChange={(on) => setSwitchOn(on)}/>
        </div>
    );
}

export default App;
