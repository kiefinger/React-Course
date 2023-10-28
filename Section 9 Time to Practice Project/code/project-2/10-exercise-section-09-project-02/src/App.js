import React, {useState}  from "react";
import AddUser from "./components/user/AddUser";
import UserList from "./components/user/UserList";
import Card from "./components/UI/Card";


function App() {

  const [list, setList] = useState([]);

  function onAddUser ( user ) {
      console.log(user);
      setList( (old) => { return [ ...old, user ] } );
      console.log(list);
  }

  return (
    <div>
      <Card className="none">
      <AddUser onAddUser={onAddUser}/>
      </Card>
      <Card className="none">
      <UserList list={list}/>
      </Card>
    </div>
  );
}

export default App;
