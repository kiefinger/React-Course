import React, {useState}  from "react";
import './AddUser.css';
import Button from "./Button";
import ErrorModal from "./ErrorModal";

function AddUser(props) {

    const [userName, setUserName] = useState("");
    const [age, setAge] = useState(0);
    const [valid, setValid] = useState(true)
    const[ message, setMessage] = useState("")

    function onClickButtonHandler(event) {
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
            setUserName("");
            setAge(0);
        }
    }
    function onChangeNameHandler(event) {
        setUserName(event.target.value);
    }
    function onChangeAgeHandler(event) {
        setAge(event.target.value);
    }
    function onMessageOkHandler() {
        setValid(true);
    }

    return (
        <div className="input">
            <form >
                <div>
                    <label htmlFor="userName">User</label>
                    <input name="userName" value={userName}  onChange={onChangeNameHandler}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input name="age" type="number" value={age} onChange={onChangeAgeHandler}/>
                </div>
                <div>
                    <Button type="button"  onClick={onClickButtonHandler}>Add</Button>
                </div>
            </form>
            <div>
                { !valid && <ErrorModal header="Error" message={message} ok={ onMessageOkHandler}/>}
            </div>
        </div>
    );
}

export default AddUser;

