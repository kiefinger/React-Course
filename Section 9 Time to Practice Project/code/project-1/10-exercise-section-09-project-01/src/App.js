import React, { useState} from "react";
import logo from './assets/investment-calculator-logo.png';

import EditInvestmentForm from "./components/investments/EditInvestmentForm";
import InvestmentCalcResult from "./components/investments/InvestmentCalcResult";
// Task 1 - Split up in smaller components.
// Task 2 - Handle Events Submit Event and click reset event.
// Task 3 - Manage State- Find out which data need to be managed as state ( investments )
// Task 4 - Use the state to output Result of the calculation. The out put is conditinal (no data, no output)
//        - Out one row per year.
// Task 5 - Bonus - Styles

// Use derived state:
// Instead of storing the result of a calculatino in state, we could  store
//  all data as sate (input) for which changes the component should be rerun the app function
// IN that case yearlyData is a derived state from userInput State

function App() {


  const [ results, setResults] = useState(null);
  const [isDataAvailable, setIsDataAvailable] = useState (false)
  function calculateHandler  (userInput)  {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    let yearlyData = [];
    let currentSavings = +userInput.currentSavings; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.yearlyContribution; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;

    let investedCapital = currentSavings;
    let toalInterestGained = 0;
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      investedCapital += yearlyContribution;
      toalInterestGained +=yearlyInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        key: i + 1,
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        investedCapital: investedCapital,
        toalInterestGained: toalInterestGained,
      });
    }
    setResults(yearlyData);
    setIsDataAvailable(yearlyData.length>0);


    // do something with yearlyData ...
    console.log(yearlyData);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>
      <EditInvestmentForm   onSubmit={calculateHandler}/>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      { isDataAvailable && <InvestmentCalcResult table={results}/> }
      { !isDataAvailable && <p>No Data Avaiable</p>}
    </div>
  );
}

export default App;
