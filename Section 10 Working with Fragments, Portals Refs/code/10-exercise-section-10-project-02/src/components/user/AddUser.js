import React, {useState, useRef}  from "react";
import './AddUser.css';
import Button from "./Button";
import ErrorModal from "../../../../../../Section 12 Practice Project - Food Order App/code/exercise-section-12/src/modules/ui/Modal";


// This sample uses ref instead of state
// Not really recommended
// This results in uncontrolled components, as the state is not managed by react components

function AddUser(props) {

    const userNameCtl = useRef();
    const ageCtl = useRef();
    const [valid, setValid] = useState(true)
    const[ message, setMessage] = useState("")

    function onClickButtonHandler(event) {

        console.log("ref:" + userNameCtl.current.value);
        const age = Number(ageCtl.current.value);
        const userName = userNameCtl.current.value;
        if ( age<= 0 ) {
            setValid(false);
            setMessage("Age must be above 0");
        } else if ( userName.trim().length<1) {
            setValid(false);
            setMessage("Enter a Name");
        } else{
            setValid(true);
            props.onAddUser ({
                id: Math.random().toString(),
                name: userName,
                age: age });
            userNameCtl.current.value = "";
            ageCtl.current.value="";
        }
    }

    function onMessageOkHandler() {
        setValid(true);
    }

    return (
        <div className="input">
            <form >
                <div>
                    <label htmlFor="userName">User</label>
                    <input name="userName"  ref={userNameCtl}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input name="age" type="number" ref={ageCtl}/>
                </div>
                <div>
                    <Button type="button"  onClick={onClickButtonHandler}>Add</Button>
                </div>
            </form>
            <div>
                { !valid && <ErrorModal title="Error" message={message} onConfirm={onMessageOkHandler}/>}
            </div>
        </div>
    );
}

export default AddUser;

