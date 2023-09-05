import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UsersContext from '../UsersContext';

const Home = (props) => {

    const userContext = useContext(UsersContext);
    const navigate = useNavigate();
    console.log(userContext);

    const [searchInput, setSearchInput] = useState('');

    const updateSearchInput = (e) => {
        setSearchInput((prevSearchInput) => e.target.value);
    }

    const gotToUser = (e) => {
        e.preventDefault();
        navigate(`/userinfo/${searchInput}`);
    }

    return (
        <div> 
            <h2> Welcome to the users-routes project </h2>
            <form onSubmit={(e) => gotToUser(e)}>
                <label htmlFor='searchInput'>
                    Whose user id do you want to look for?
                </label>
                <input  type='number' 
                        id='searchInput' 
                        name='searchInput'  
                        onChange={(e) => updateSearchInput(e)}/>
                <button type='submit'>
                    Search
                </button>
            </form>
            <button onClick={() => userContext.addUser()}>
                Add Michael to the list
            </button>
        </div>
    );
}

export default Home;