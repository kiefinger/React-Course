import {Fragment} from "react";
import {useSelector} from "react-redux";
import Counter from './components/Counter';
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
    const isAuthentidcated = useSelector( (state) => { return state.auth.isAuthenticated });
  return (
      <Fragment>
         <Header/>
         {!isAuthentidcated && <Auth/> }
         {isAuthentidcated && <UserProfile/> }
         <Counter />
      </Fragment>
  );
}

export default App;
