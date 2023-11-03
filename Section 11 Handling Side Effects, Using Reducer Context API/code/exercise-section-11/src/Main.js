import React, {useContext} from "react";
import AuthContext, {AuthContextSubscriber} from "./context/authContext";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function Main (props) {
    const ctx = useContext(AuthContext);
    console.log("man.isLoggedin=" + ctx.isLoggedIn);
    return (
        <React.Fragment>
            <MainHeader />
            <main>
                {!ctx.isLoggedIn && <Login onLogin={ctx.onLogin} />}
                {ctx.isLoggedIn && <Home onLogout={ctx.onLogout} />}
            </main>
        </React.Fragment>
    );

}
export default Main;
