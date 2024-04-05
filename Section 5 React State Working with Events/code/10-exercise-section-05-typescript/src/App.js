import React, {useState} from 'react';
import ExpenseItems from './components/Expenses/ExpenseItems';
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const initialExpenses = [
    { id: 1, title: 'Car Insurence', amount: 532,  expensedate: new Date(2022,9,21)},
    { id: 2, title: 'Car Insurence 2', amount: 53, expensedate: new Date(2022,9,21)},
    { id: 3, title: 'Car Insurence 3', amount: 52, expensedate: new Date(2022,9,21)},
    { id: 4, title: 'Car Insurence 4', amount: 32, expensedate: new Date(2022,9,21)},
  ];

  const [expenses, setExpenses] = useState(initialExpenses);
  function onNewExpenseHandler( expenseData ) {
      console.log(expenseData);
      let newExpense = {
          id: expenseData.id,
          title: expenseData.title,
          amount: expenseData.amount,
          expensedate: expenseData.date};

      setExpenses( (prevExpenses) => {
          return [newExpense, ...prevExpenses];
      });

  }
  return (
    <div>
      <h2>Let's get started! {expenses[0].expensedate.toISOString()}</h2>
        <NewExpense onNewExpense={onNewExpenseHandler}/>
      <ExpenseItems items={expenses}/>
     </div>
  );
}

export default App;
