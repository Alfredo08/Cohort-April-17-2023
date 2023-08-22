import React from 'react';

const Dog = (props) => {
    return(
        <div>
            <img src={props.dogUrl} alt="An image of a dog"/>
        </div>
    );
}

export default Dog;