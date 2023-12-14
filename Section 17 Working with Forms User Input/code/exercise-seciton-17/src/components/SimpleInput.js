import {useEffect, useRef, useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
//    const [enteredName, setEnteredName] = useState('');
//    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
//    const enteredNameIsValid = enteredName.trim() !== '';
    const [email, setEmail] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const emailIsValid = email.trim() !== '' && email.includes("@") ;

    const { value: enteredName,
        hasError: enteredNameHasError,
        isValid: enterdNameIsValid,
        valueChangeHandler: enteredNameChangeHandler,
        inputBlurHandler: enteredNameBlurHandler ,
        reset: resetNameInput
    } = useInput( (value) => { return value.trim() !== ''})


    let formIsValid = false;

    if ( enterdNameIsValid && emailIsValid ) {
        formIsValid = true;
    }

    function emailInputChangeHandler(event) {
        setEmail(event.target.value);
    }
    function emailInputBlurHandler(event) {
        setEmailTouched(true);
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        if (enterdNameIsValid === '') {
            return;
        }
        setEmail("");
        setEmailTouched(false);
        resetNameInput();
    }


    const nnameInputClasses = enteredNameHasError ? 'form-control invalid' : "form-control";
    const emailInputClasses = emailTouched && !emailIsValid ? 'form-control invalid' : "form-control";

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nnameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={enteredNameChangeHandler} onBlur={enteredNameBlurHandler} value={enteredName} />
                {enteredNameHasError && <p className="error-text">Name is not valid</p> }
            </div>
            <div className={emailInputClasses}>
                <label htmlFor='email'>E-Mail</label>
                <input type='email' id='email' onChange={emailInputChangeHandler} onBlur={emailInputBlurHandler} value={email} />
                {!emailIsValid && emailTouched && <p className="error-text">E-Mail is not valid</p> }
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
