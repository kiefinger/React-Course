import './ExpenseItems.css';

import ExpenseItem from './ExpenseItem';


function ExpenseItems (props) {

    return (
        <div className="expenses">
           <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].expensedate}></ExpenseItem>
           <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].expensedate}></ExpenseItem>
           <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].expensedate}></ExpenseItem>
        </div>
    );
}


export default ExpenseItems;