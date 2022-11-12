import React, {useState} from 'react';
import './App.css';
import {AppTitle} from './components/AppTitle/AppTitle';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {OnOff} from './components/OnOff/OnOff';
import {SelfControlledAccordion} from './components/SelfControlledAccordion/SelfControlledAccordion';
import {UnControlledOnOff} from './components/UnControlledOnOff/UnControllerOnOff';
import {Select} from './components/Select/Select';



function App(props: any) {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [collapsed, setCollapsed] = useState<boolean>(true);
    let [switchOn, setSwitchOn] = useState<boolean>(false);

    return (
        <div className="App">
            <AppTitle title={'This is component.'}/>

            <h2>Article 1</h2>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Accordion titleValue={'Menu'}*/}
            {/*           collapsed={collapsed}*/}
            {/*           onChange={() => {setCollapsed(!collapsed)}}*/}
            {/*           onClick={()=> {}}*/}
            {/*           items={props.items}*/}

            {/*/>*/}
            <OnOff title1={'On'} title2={'Off'} on={switchOn} onChange={(on) => setSwitchOn(on)}/>

            <h2>Article 2</h2>

            <SelfControlledAccordion titleValue={'Contacts'}/>
            <OnOff title1={'On'} title2={'Off'} on={switchOn} onChange={(on) => setSwitchOn(on)}/>
            <UnControlledOnOff onChange={(on) => {}}/>
            <UnControlledRating
                defaultValue={props.defaultValue}
                onChange={()=> {}}
                defaultOn={props.defaultOn}
                defaultOff={props.defaultOff}
                value={props.value}
            />

            <h2>Select</h2>
            <Select
                onChange={() => {}} items={[]} value={props.value}
            />
        </div>
    );
}

export default App;
