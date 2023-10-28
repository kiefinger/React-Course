

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

function InvestmentCalcResult ( props ) {

    //    tmp.push({
//        // feel free to change the shape of the data pushed to the array!
//        year: i + 1,
//        yearlyInterest: yearlyInterest,
//        savingsEndOfYear: currentSavings,
//        yearlyContribution: yearlyContribution,

    return (
          <table className="result">
              <thead>
              <tr>
                  <th>Year</th>
                  <th>Total Savings</th>
                  <th>Interest (Year)</th>
                  <th>Total Interest</th>
                  <th>Invested Capital</th>
              </tr>
              </thead>
              <tbody>
              {props.table.map ( (row) => (
                  <tr>
                      <td>{row.year}</td>
                      <td>{formatter.format(row.savingsEndOfYear)}</td>
                      <td>{formatter.format(row.yearlyInterest)}</td>
                      <td>{formatter.format(row.toalInterestGained)}</td>
                      <td>{formatter.format(row.investedCapital)}</td>
                  </tr>

              ))}
              </tbody>
          </table>
    );
}

export default InvestmentCalcResult;