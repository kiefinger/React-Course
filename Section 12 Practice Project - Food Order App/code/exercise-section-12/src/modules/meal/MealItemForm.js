import React, {useContext, useState} from "react";

import './MealItemForm.css';
import '../ui/Input';
import Input from "../ui/Input";
import CartContext from "../../store/cartContext";

function MealItemForm(props) {

    const ctx = useContext(CartContext);

    const [amount,setAmount] = useState(1);
    function onSubmitHandler(event) {
        event.preventDefault();
        ctx.addItem({
            ...props.meal,
            amount: amount
        });
    }
    function onChangeValue(event){
        setAmount(event.target.value);
    }
    return ( <form className="form" onSubmit={onSubmitHandler}>
            <Input label="Amount" input={{
                id: 'amount',
                type: 'number,' ,
                min: '1',
                max: '5',
                step: '1',
                defaultValue: amount,
                onChange : onChangeValue}}
            />
            <button type="submit">Add</button>
            </form>
    )
}

export default MealItemForm;