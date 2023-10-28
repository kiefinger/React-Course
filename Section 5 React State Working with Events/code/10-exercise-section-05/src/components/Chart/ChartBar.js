import React , { useState } from 'react';

import './ChartBar.css'

function ChartBar (props) {

    console.log(props)
    let barFillHeight = '0%';
    if ( props.maxValue > 0) {
        barFillHeight = Math.round( (props.value / props.maxValue) *100) +'%';
    }
    return (
        <div className="char-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight}}><p>{barFillHeight}</p></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );


}

export default ChartBar;