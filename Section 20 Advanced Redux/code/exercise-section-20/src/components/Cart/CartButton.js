import classes from './CartButton.module.css';

import { useDispatch, useSelector } from "react-redux";
import { uiActions } from '../../store/ui-slice';





const CartButton = (props) => {
    const dispatch = useDispatch();
    const totalQuantity = useSelector( (state) => state.cart.totalQuantity);
    function onSwitchCartHandler(event) {
        dispatch(uiActions.toggle());
        
    }
    return (
        <button className={classes.button} onClick={onSwitchCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
