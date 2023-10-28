import React, { useState } from 'react';
import './ExpenseFilter.css';

function ExpenseFilter (props) {

    function onYearChangeHanlder ( event ) {
        console.log(event.target.value)
        props.onFilterChange(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={onYearChangeHanlder} value={props.selected}>
                    <option value={'2021'}>2021</option>
                    <option value={'2022'}>2022</option>
                    <option value={'2023'}>2023</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;