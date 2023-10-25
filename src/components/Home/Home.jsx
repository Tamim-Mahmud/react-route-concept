import React from 'react';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import '../Home/Home.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Home = () => {
    const navigation=useNavigation();
 
    
    return (
        <div className="home">
            {
                
            }
            <ActiveLink to='/'>Home</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <div className="">
                {
                    navigation.state === "loading"? 'Loading....' :''
              
                }
            </div>
            <Outlet />
        </div>
    );
};

export default Home;