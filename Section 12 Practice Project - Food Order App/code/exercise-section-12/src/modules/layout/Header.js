import './Header.css';
import React, {useContext} from "react";
import picture from  '../../assets/meals.jpg';
import HeaderCardButton from "./HeaderCardButton";
function Header (props) {
    return (
        <React.Fragment>
            <header className="header">
                <h1>ReactMeal</h1>
                <HeaderCardButton onClick={props.onShowCart}/>
            </header>
            <div className="main-image"><img src={picture}/></div>
        </React.Fragment>
    )

}

export default Header;