import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './components/Contact/Contact.jsx';
import About from './components/About/About.jsx';

import ErrorPage from "./error-page";
import Home from './components/Home/Home.jsx';
import Friends from './components/Friends/Friends.jsx';
import Friend from './components/Friend/Friend.jsx';
import FriendDetail from './components/FriendDetails/FriendDetail.jsx';
import Posts from './components/Post/Posts.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children : [
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />
      },
      {
        path:"/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path:"/friend/:friendsId",
        element: <FriendDetail />,
        loader : ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendsId}`)
        
      },
      {
        path: '/posts',
        element: <Posts />,
        loader: ()=>fetch(`https://jsonplaceholder.typicode.com/posts`)
      },
      {
        path: '/post/:postId',
        element: <PostDetails />,
        loader : ({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:"/friends",
        element: <Friends />,
        errorElement: <ErrorPage />,
        loader:()=> fetch("https://jsonplaceholder.typicode.com/users")
      }
    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
