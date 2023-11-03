import React, {useContext} from "react";
import './HeaderCardButton.css';
import CardIcon from '../ui/CartIcon';
import CartContext from "../../store/cartContext";

function HeaderCardButton(props){
    const ctx = useContext(CartContext);
    const numberOfcartItems = ctx.items.reduce( (cur,item) => {return cur + Number(item.amount)}, 0)
    console.log(numberOfcartItems);
    return(
        <button className="button" onClick={props.onClick}>
            <span className="icon"><CardIcon/></span>
            <span>your Card</span>
            <span className="badge">{numberOfcartItems}</span>
        </button>
    )

}
export default HeaderCardButton;
