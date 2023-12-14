import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";
import {counterActions} from "../store/counter";

const Counter = () => {
    const counter = useSelector( (state) => { return state.counter.counter });
    console.log(counter);
    const showCounter = useSelector( (state) => { return state.counter.showCounter });
    const dispatch = useDispatch();

  function incrementHandler () {
        console.log("incrementHandler")
      dispatch (  counterActions.increment());
  }
    function incrementHandler5 () {
        dispatch ( counterActions.increase ( 5 ));
    }
  function decrementHandler() {
      dispatch (  counterActions.decrement());
  }

  function toggleCounterHandler() {
      dispatch( counterActions.toogleCounter());
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
         <div className={classes.value}>{counter}</div>
        <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={incrementHandler5}>Increment 5</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
