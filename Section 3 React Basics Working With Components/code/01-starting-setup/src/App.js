import ExpenseItems from './components/ExpenseItems';

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
      <ExpenseItems items={expenses}/>
     </div>
  );
}

export default App;
