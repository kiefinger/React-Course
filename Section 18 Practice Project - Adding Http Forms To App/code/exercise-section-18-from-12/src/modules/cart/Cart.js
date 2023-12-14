import React, {useContext, useState} from 'react';
import Modal  from '../ui/Modal'

import './Cart.css';
import CartContext from "../../store/cartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart (props) {
    const ctx = useContext(CartContext);
    const url = 'https://tasks-fdf69-default-rtdb.firebaseio.com/orders.json';

    const cartItems = ctx.items.map( (item) =>
        { return <CartItem key={item.id} item={item}
                           onRemove={onCartItemRemoveHandler.bind(null,item.id)}
                           onAdd={onCartItemAddHandler.bind(null,item)}/>})

    const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
    const hasItems = ctx.items.length>0;
    const [isCheckout, setisCheckout]  = useState(false);

    function onCartItemAddHandler( item ) {
        ctx.addItem({
            ...item,
            amount: 1
        });
    }

    function onCartItemRemoveHandler( id) {
        ctx.removeItem(id);
    }
    function onCheckoutHandler() {
        setisCheckout(true);
    }

    async function submitOrder (userData) {
        console.log( "submitOrder");
        const response = await fetch ( url, {
            method: 'POST',
            body: JSON.stringify(  {
                user: userData,
                orderItems: ctx.items
            })
        } );
        if ( !response.ok ) {
            console.log("Error")
        }
    }
    return (
        <Modal onClick={props.onClose}>
            <div>
                {!isCheckout && <ul className="cart-items">{cartItems}</ul>}
                <div className="total">
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                {!isCheckout && <div className="actions">
                    <button className="button--alt" onClick={props.onClose}>Close</button>
                    {hasItems && <button className="button" onClick={onCheckoutHandler} >Checkout</button>}
                </div>}
                <div className="checkout">
                    {isCheckout && <Checkout onCancel={props.onClose} onConfirm={submitOrder} /> }
                </div>
            </div>
        </Modal>
    );
}
export default Cart;

