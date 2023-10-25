import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const {userId,id,title,body}=(props.post)
    // console.log(userId);
    return (
        <div>
           <h1>{id}</h1>
           <h2>{title}</h2>
           <button><Link to={`/post/${id}`}>Show Details</Link></button>
        </div>
    );
};

export default Post;