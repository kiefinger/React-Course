import React , { useState } from 'react';
import ChartBar from './ChartBar';

import './Chart.css'

function Chart (props) {

    const dataPointsValues =  props.dataPoints.map ( (e) => e.value)
    const totalMaximum = Math.max( ...dataPointsValues);

    return (
        <div className="chart">
            {props.dataPoints.map ( (data) => (<ChartBar key={data.label} value={data.value} maxValue={totalMaximum} label={data.label} />) )}
        </div>
    );


}

export default Chart;