import ExpenseItem from './components/ExpenseItem';

function App() {

  const expenses = [
    { title: 'Car Insurence', amount: 532,  expensedate: new Date(2022,9,21)},
    { title: 'Car Insurence 2', amount: 53, expensedate: new Date(2022,9,21)},
    { title: 'Car Insurence 3', amount: 52, expensedate: new Date(2022,9,21)},
    { title: 'Car Insurence 4', amount: 32, expensedate: new Date(2022,9,21)},
  ];
  return (
    <div>
      <h2>Let's get started! {expenses[0].expensedate.toISOString()}</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].expensedate}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].expensedate}></ExpenseItem>
      </div>
  );
}

export default App;
