import {React} from 'react';
import { useParams } from 'react-router-dom';

const User = (props) => {
    const {userId} = useParams();

    const currentUser = props.users.filter((user) => user.id === Number(userId));
    if(currentUser.length > 0){
        return(
            <div>
                <h2> User name: {currentUser[0].firstName} {currentUser[0].lastName}</h2>
                <p> User id: {userId} </p>
            </div>
        );
    }
    else{
        return(
            <div>
                That user doesn't exist!
            </div>
        );
    }
    
};

export default User;