import React from 'react';

import {AuthContextProvider} from "./context/authContext";
import Main from "./Main";

function App() {

   return (
        <AuthContextProvider>
            <Main>
            </Main>
        </AuthContextProvider>
  );
}

export default App;
