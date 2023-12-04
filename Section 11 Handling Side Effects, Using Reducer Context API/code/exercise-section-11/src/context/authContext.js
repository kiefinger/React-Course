import React, {useEffect, useState} from 'react';



const AuthContext = React.createContext( {
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {}
});

// I use a nother strategy and directy load the key to initialize state. In this way
// there is no flickering and not second redrawing after the state change.

export function AuthContextProvider (props) {
    const [isLoggedIn, setIsLoggedIn] = useState(() => (localStorage.getItem("isLoggedIn")=== '1'));

    useEffect(() => {
        // This will run after  every component reevaluation.
        // It will start when dependencies changes
        // Will only run once, as there are not dependencies.
        const storedUserLoginIn = localStorage.getItem("isLoggedIn");
        if ( storedUserLoginIn === '1') {
            setIsLoggedIn(true);
        }
    },    []);

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
    };

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
