import './Checkout.css';
import {useState} from "react";

const Checkout = (props) => {

    let isFormvalid = false;

    const [name, setName] = useState('');
    const [nameTouched, setNameTouched] = useState(false);
    const nameIsValid = name.trim() !== ''  ;

    const [street, setStreet] = useState('');
    const [streetTouched, setStreetTouched] = useState(false);
    const streetIsValid = street.trim() !== ''  ;

    const [postal, setPostal] = useState('');
    const [postalTouched, setPostalTouched] = useState(false);
    const postalIsValid = postal.trim() !== '' &&  postal.trim().length === 5;

    const [city, setCity] = useState('');
    const [cityTouched, setCityTouched] = useState(false);
    const cityIsValid = city.trim() !== ''  ;

    function nameOnChangeHandler(event) {
        setName(event.target.value);
    }
    function streetOnChangeHandler(event) {
        setStreet(event.target.value);
    }
    function postalOnChangeHandler(event) {
        setPostal(event.target.value);
    }
    function cityOnChangeHandler(event) {
        setCity(event.target.value);
    }

    function nameOnBlurHandler(event) {
        setNameTouched(true);
    }
    function streetOnBlurHandler(event) {
        setStreetTouched(true);
    }
    function postalOnBlurHandler(event) {
        setPostalTouched(true);
    }
    function cityOnBlurHandler(event) {
        setCityTouched(true);
    }

    const confirmHandler = (event) => {
        event.preventDefault();

        if ( !( nameIsValid && streetIsValid && postalIsValid && cityIsValid )) {
            return;
        }

        props.onConfirm({
            name: name,
            street: street,
            postal: postal,
            city: city
        });

        setName("");
        setStreet("");
        setPostal("");
        setCity("");
        setNameTouched(false);
        setStreetTouched(false);
        setPostalTouched(false);
        setCityTouched(false);
    };


    if ( nameIsValid && streetIsValid && postalIsValid && cityIsValid ) {
        isFormvalid = true;
    }


    const nameInputClasses  = `checkout-control ${nameTouched && !nameIsValid ? 'checkout-invalid' : ""}`
    const streetInputClasses  = `checkout-control ${streetTouched && !streetIsValid ? 'checkout-invalid' : ""}`
    const postalInputClasses  = `checkout-control ${postalTouched && !postalIsValid ? 'checkout-invalid' : ""}`
    const cityInputClasses  = `checkout-control ${cityTouched && !cityIsValid ? 'checkout-invalid' : ""}`

    return (
        <form className="checkout-form" onSubmit={confirmHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' value={name} onChange={nameOnChangeHandler} onBlur={nameOnBlurHandler} />
            </div>
            <div className={streetInputClasses}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' value={street} onChange={streetOnChangeHandler} onBlur={streetOnBlurHandler}/>
            </div>
            <div className={postalInputClasses}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' value={postal} onChange={postalOnChangeHandler} onBlur={postalOnBlurHandler}/>
                {nameTouched && !postalIsValid && <p>Enter a 5-digit postal code</p>}
            </div>
            <div className={cityInputClasses}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' value={city} onChange={cityOnChangeHandler} onBlur={cityOnBlurHandler}/>
            </div>
            <div className="checkout-actions">
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className="submit">Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
