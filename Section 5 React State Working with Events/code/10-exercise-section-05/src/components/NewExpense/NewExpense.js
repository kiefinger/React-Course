import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

function NewExpense (props) {

    const [isEditing, setIsEditing] = useState ( false);


    function activateEditing() {
        setIsEditing(true);
    }

    function cancelEditing() {
        setIsEditing(false);
    }
    function onSaveExpenseData(data) {
        const newExpense = {
            ...data,
            id: Math.random().toString()
        }
        console.log(newExpense);
        props.onNewExpense(newExpense);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button type="button" onClick={activateEditing}>Add Expense</button> }
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancelHandler={cancelEditing}/>}
        </div>
    )
};

export default NewExpense;
