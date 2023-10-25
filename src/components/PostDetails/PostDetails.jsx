import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const data =useLoaderData()
    const {userId,id,title,body}=(data);
    const navigation =useNavigate()
     const handleNavigate =()=>{
        navigation((-1));
     }
    return (
        <div>
            <h1>{id}</h1>
           <h2>{title}</h2>
           <h3>{body}</h3>
           <button onClick={handleNavigate}>Go back</button>
        </div>
    );
};

export default PostDetails;