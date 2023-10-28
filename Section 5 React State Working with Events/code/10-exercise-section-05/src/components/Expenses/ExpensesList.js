import ExpenseItem from "./ExpenseItem";
import React from "react";
import './ExpensesList.css';

function ExpensesList ( props ) {

    let data =  <p>No Data</p>;

    const filteredExpenses = props.list.filter (
        (e) => { return (e.expensedate.getFullYear().toString() === props.filteredYear); });

    if (filteredExpenses.length ==0 ) {
        return <p>No Data</p>;
    }

    return filteredExpenses.map( (e) => (
        <ExpenseItem key={e.id} title={e.title} amount={e.amount} date={e.expensedate}></ExpenseItem>));

}

export default ExpensesList;