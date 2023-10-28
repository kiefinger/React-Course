import './ExpenseItems.css';


import ExpenseItem from './ExpenseItem';
import Card        from '../UI/Card';


function ExpenseItems (props) {

    return (
        <Card>
           <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].expensedate}></ExpenseItem>
           <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].expensedate}></ExpenseItem>
           <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].expensedate}></ExpenseItem>
        </Card>
    );
}


export default ExpenseItems;