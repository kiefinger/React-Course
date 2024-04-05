import './ExpenseItem.css';

import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {

    const [title, setTitle] = useState(props.title);
    function clickHandler() {
        console.log ("Clicked");
        setTitle( title + "!");
    }
    return (
      <Card className="expense-item">
          <ExpenseDate date= {props.date} />
          <div className="expense-item__description" >
            <div>{title}</div>
            <div className="expense-item__price" >{props.amount}</div>
          </div>
          <button onClick={clickHandler}>Change Title</button>
      </Card>
    );
  }
  
export default ExpenseItem;