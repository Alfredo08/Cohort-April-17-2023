import './App.css';
import {Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';
import UsersContext from './UsersContext';
import { useEffect, useState, createContext } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [loggedIn, setLoggedIn] = useState(true);
  const addUser = (e) => {
    const newUser = {
      firstName : "Michael",
      lastName : "Gomez",
      id : 444
    }
    setUsers((prevUsers) => [...prevUsers, newUser])
  }
  useEffect( () => {
    const loadUsers = () => {
      // Assume that an API request is done to a server
      const fetchedUsers = [{
        firstName : "Alex",
        lastName : "Miller",
        id : 123
      },
      {
        firstName : "Martha",
        lastName : "Smith",
        id : 456
      },
      {
        firstName : "Roger",
        lastName : "Anderson",
        id : 789
      }];

      setUsers(prevUsers => fetchedUsers);
    }
    loadUsers();
  }, []);

  const valuesForContext = {
    users,
    loggedIn,
    addUser
  }
  return (
    <UsersContext.Provider value={valuesForContext}>
      <div className="App">
        <h1> Routes project </h1>
        <div className='navigation'>
          <Link to="/home"> Home </Link>
          <Link to="/about"> About </Link>
        </div>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/about" Component={() => {
            return (loggedIn) ? <div> Welcome back </div> : <div> You need to log in first!</div>;
          }} />
          <Route path="/userinfo/:userId" element={<User users={users}/>} />
        </Routes>
      </div>
    </UsersContext.Provider>
  );
}

export default App;
