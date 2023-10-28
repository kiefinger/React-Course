import React , { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm (props) {

    const [title, setTitle] = useState ('')
    const [amount, setAmount] = useState ('')
    const [date, setDate] = useState ('')

    function onChangeTitleHandler(event) {
        setTitle(event.target.value);
    }
    function onChangeAmountHandler(event) {
        setAmount(event.target.value);
    }
    function onChangeDateHandler(event) {
        setDate(event.target.value);
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date),
        }
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        props.onCancelHandler();

        setTitle('');
        setAmount('');
        setDate('');
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expene__controlls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text'  value={title} onChange={onChangeTitleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min="0.0.1" step="0.01" value={amount} onChange={onChangeAmountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="1901-01-01" max="2099-12-31" value={date} onChange={onChangeDateHandler}/>
                </div>
            </div>
            <div className="new-expense">
                <button type="button" onClick={props.onCancelHandler}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )
};

export default ExpenseForm;
