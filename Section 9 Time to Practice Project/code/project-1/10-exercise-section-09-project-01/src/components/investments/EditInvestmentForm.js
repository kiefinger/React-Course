import React , { useState } from "react";

function EditInvestmentForm(props) {

    const [ currentSavings, setCurrentSavings] = useState(100);
    const [ yearlyContribution, setYearlyContribution] = useState(0);
    const [ expectedReturn, setExpectedReturn ] = useState(3);
    const [ duration, setDuration] = useState (10);

    function onSubmitHandler(event) {
        event.preventDefault();
        props.onSubmit ({
            currentSavings: currentSavings,
            yearlyContribution: yearlyContribution,
            expectedReturn: expectedReturn,
            duration: duration,
        } );

    }
    function onChangeCurrentSavingsHandler(event) {
        setCurrentSavings( event.target.value);
    }
    function onChangeYearlyContributionHandler(event){
        setYearlyContribution(event.target.value);
    }
    function onChangeExpectedReturn(event) {
        setExpectedReturn(event.target.value);
    }
    function onChangeDuration(event){
        setDuration(event.target.value);
    }
    function onResetHandler(event){
        setDuration(10);
        setExpectedReturn(3)
        setCurrentSavings(100);
        setYearlyContribution(0);
    }
    return (
        <form className="form" onSubmit={onSubmitHandler}>
            <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input type="number" id="current-savings" value={currentSavings} onChange={onChangeCurrentSavingsHandler}/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                    <input type="number" id="yearly-contribution" value={yearlyContribution} onChange={onChangeYearlyContributionHandler}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Interest (%, per year)</label>
                    <input type="number" id="expected-return" value={expectedReturn} onChange={onChangeExpectedReturn}/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="number" id="duration" value={duration} onChange={onChangeDuration}/>
                </p>
            </div>
            <p className="actions">
                <button type="reset" className="buttonAlt" onClick={onResetHandler}>Reset</button>
                <button type="submit" className="button" >Calculate</button>
            </p>
        </form>

    )
}

export default EditInvestmentForm;