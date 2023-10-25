import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Postt/Post';

const Posts = () => {
    const posts =useLoaderData();
    console.log(posts);
    return (
        <div>
            Total Number of post {posts.length}
            {
                posts.map(post => <Post post={post} key={post.id} />)
            }
        </div>
    );
};

export default Posts;