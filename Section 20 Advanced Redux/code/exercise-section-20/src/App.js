import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {uiActions} from './store/ui-slice';
import Notification from './components/UI/Notification';
import {sendCardData, fetchCardData} from './store/cart-slice';



function App() {
    const dispatch = useDispatch();

    const cartIsVisible = useSelector((state) => { return state.ui.cartIsVisible });
    const notification = useSelector((state) => { return state.ui.notification });
    const cart = useSelector ( (state ) => state.cart);

    useEffect(() => {
         dispatch (fetchCardData());
        }, [dispatch])

    useEffect(() => {
        if ( cart.changed ) {
            dispatch ( sendCardData(cart) )
        }
    }, [cart, dispatch])

    console.log(cartIsVisible)

    return (
    <Fragment>
        {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
        <Layout>
          {cartIsVisible && <Cart /> }
          <Products />
        </Layout>
    </Fragment>
  );
}

export default App;
