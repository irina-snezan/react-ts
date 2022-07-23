import React from 'react';
import classes from './AppTitle.module.css';


type AppTitleType = {
    title: string
}

export function AppTitle(props: AppTitleType) {
    return (
        <div className={classes.appTitle}>
            <h3>{props.title}</h3>
        </div>
    );
}