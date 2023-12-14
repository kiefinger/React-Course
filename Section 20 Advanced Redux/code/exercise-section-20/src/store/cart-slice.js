import { createSlice } from '@reduxjs/toolkit';
import {uiActions} from './ui-slice';

const url = 'https://tasks-fdf69-default-rtdb.firebaseio.com/cart.json';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false,
    },
    reducers: {
          replaceCart ( state ,action ) {
            if ( action.payload.items ) {
                state.items = action.payload.items;
            } else {
            state.items = [];
            }

            state.totalQuantity = action.payload.totalQuantity;
          },
          addItemToCart(state, action) {
             console.log(action.payload);
             const newItem = action.payload;
             const existingItem = state.items.find((item) => item.id === newItem.id);
             state.totalQuantity++;
             if (!existingItem) {
               state.items.push({
                 id: newItem.id,
                 price: newItem.price,
                 quantity: 1,
                 totalPrice: newItem.price,
                 name: newItem.title
               });
             } else {
               existingItem.quantity++;
               existingItem.totalPrice = existingItem.totalPrice + newItem.price;
             }
            state.changed = true;
           },
           removeItemFromCart(state, action) {
             const id = action.payload;
             const existingItem = state.items.find(item => item.id === id);
             state.totalQuantity--;
             if (existingItem.quantity === 1) {
               state.items = state.items.filter(item => item.id !== id);
             } else {
               existingItem.quantity--;
               existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
             }
            state.changed = true;
         },
    },
});


//In this card we can call any async code, any side effects.
export function sendCardData ( cart ) {
    return async (dispatch) => {
         dispatch( uiActions.showNotification( { status: 'pending', 'title': 'sending', 'message': "sending"}) )
         async function sendRequest() {
             const response = await fetch ( url,
                 { method: 'PUT',
                   body: JSON.stringify( {
                     items: cart.items,
                     totalQuantity: cart.totalQuantity
                   } )
                 });
             if ( !response.ok) {
                 throw new Error ( 'Error while sending cart data');
             }
             const responseData = await response.json();
         }
         try {
            await sendRequest();
            dispatch( uiActions.showNotification( { status: 'success', 'title': 'Sucessful', 'message': "saved"}) )
         } catch ( error ) {
            dispatch( uiActions.showNotification( { status: 'error', 'title': 'error', 'message': error}) )
         }
    }
}
//In this card we can call any async code, any side effects.
export function fetchCardData ( ) {
    return async (dispatch) => {
         dispatch( uiActions.showNotification( { status: 'pending', 'title': 'load', 'message': "loading"}) )
         async function fetchRequest() {
             const response = await fetch ( url);
             if ( !response.ok) {
                 throw new Error ( 'Error while sending cart data');
             }
             const responseData = await response.json();
             return responseData;
         }
         try {
            const data = await fetchRequest();
            dispatch ( cartActions.replaceCart(data))
            dispatch( uiActions.showNotification( { status: 'success', 'title': 'Sucessfull', 'message': "loaded"}) )
         } catch ( error ) {
            dispatch( uiActions.showNotification( { status: 'error', 'title': 'error', 'message': error}) )
         }
    }
}
export const cartActions = cartSlice.actions;
export default cartSlice;