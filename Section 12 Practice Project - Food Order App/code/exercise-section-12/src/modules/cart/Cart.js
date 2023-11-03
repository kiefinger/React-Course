import React, {useContext} from 'react';
import Modal  from '../ui/Modal'

import './Cart.css';
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";

function Cart (props) {
    const ctx = useContext(CartContext);

    const cartItems = ctx.items.map( (item) =>
        { return <CartItem key={item.id} item={item}
                           onRemove={onCartItemRemoveHandler.bind(null,item.id)}
                           onAdd={onCartItemAddHandler.bind(null,item)}/>})

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length>0;

    function onCartItemAddHandler( item ) {
        ctx.addItem({
            ...item,
            amount: 1
        });
    }

    function onCartItemRemoveHandler( id) {
        ctx.removeItem(id);
    }


    return (
        <Modal onClick={props.onClose}>
            <div>
                <ul className="cart-items">{cartItems}</ul>
                <div className="total">
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className="actions">
                    <button className="button--alt" onClick={props.onClose}>Close</button>
                    {hasItems && <button className="button" >Order</button>}
                </div>
            </div>
        </Modal>
    );
}
export default Cart;

