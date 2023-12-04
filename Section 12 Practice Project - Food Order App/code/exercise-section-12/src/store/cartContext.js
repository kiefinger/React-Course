import React, {useEffect, useState, useReducer} from 'react';



const CartContext = React.createContext({ });

// I use a nother strategy and directy load the key to initialize state. In this way
// there is no flickering and not second redrawing after the state change.

const defaultCartState = {
    items: [],
    totalAmount: 0,
};


function cartStateUpdate ( state, action) {
    if ( action.type ==='ADD') {

        const index = state.items.findIndex( item => item.id === action.item.id);
        const existingItem = state.items[index];

        let updatedItems;
        if ( existingItem) {
            const updatedItem = {
                ...existingItem,
                amount: Number(existingItem.amount) + Number(action.item.amount)
            };
            updatedItems = [...state.items];
            updatedItems[index] = updatedItem;
        }  else {
             updatedItems = state.items.concat(action.item);
        }


        const updatedAmount = calcTotalAmount(updatedItems);
        return ( {
            items: updatedItems,
            totalAmount: updatedAmount
        })
    } else if ( action.type === "REMOVE" ) {
        const index = state.items.findIndex( item => item.id === action.id);
        const existingItem = state.items[index];

        let updatedItems;
        if ( existingItem.amount > 1) {
            const updatedItem = {
                ...existingItem,
                amount: Number(existingItem.amount) -1
            };
            updatedItems = [...state.items];
            updatedItems[index] = updatedItem;
        } else {
            updatedItems = state.items.filter( (item) => { return (item.id!==action.id); });
        }

        const updatedAmount = calcTotalAmount(updatedItems);

        return ( {
            items: updatedItems,
            totalAmount: updatedAmount
        })
    }
    return defaultCartState;
}

function calcTotalAmount( items) {
    return items.reduce( (cur, item) => { return Number(cur) + Number(item.amount) *Number(item.price)  }, 0);
}

export function CartContextProvider (props) {

    const [cartState, dispatchCartAction] = useReducer( cartStateUpdate, defaultCartState);

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    function addItemHandler(item) {
        dispatchCartAction({type: "ADD", item: item});


    }
    function removeItemHandler(id) {
        dispatchCartAction({type: "REMOVE", id: id});
    }


    return (
        <CartContext.Provider
            value={ cartContext }
        >{props.children}</CartContext.Provider>
    );
}

export default CartContext;
