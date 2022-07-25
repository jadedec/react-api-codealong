import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import ProfileContainer from "./components/ProfileContainer/ProfileContainer";

const App = () => {

  //link the getUser function to be called on a button press
  //use the ProfileCard component to show a single user o the page
  //when we press the button
  const [users, setUsers] = useState();
  
  const getUsers = async() => {
    const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();

    setUsers(data.results);
  };


  return (
    <div className="app">
      <h1>Random User Generator</h1>
      <Button label="Get Random User" onClick={getUsers} />
      {users && <ProfileContainer users={users} />}
    </div>
  );
};

export default App;
