import React, { useState } from 'react';
import ExpensesChart from "./ExpensesChart";

import './ExpenseItems.css';


import Card        from '../UI/Card';
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";


function ExpenseItems (props) {

    const [filteredYear, setFilteredYear ] = useState ('2023');

    function onFilterChangeHandler( filterData ) {
        console.log ('filter changed to: ' + filterData );
        setFilteredYear(filterData);
    }

    const filteredExpenses = props.items.filter (
        (e) => { return (e.expensedate.getFullYear().toString() === filteredYear); });

    return (
        <Card>
            <ExpenseFilter onFilterChange={onFilterChangeHandler} selected={filteredYear}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList list={filteredExpenses} filteredYear={filteredYear}/>
        </Card>
    );
}


export default ExpenseItems;