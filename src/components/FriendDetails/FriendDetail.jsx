import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
           { `this is ${friend.name}`} data
        </div>
    );
};

export default FriendDetail;