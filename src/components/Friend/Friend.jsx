import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend)
    return (
        <div>
            <h2>{friend.name}</h2>
            <button><Link to={`/friend/${friend.id}`}>check more info</Link></button>
        </div>
    );
};

export default Friend;