import React from "react";
import { NavLink } from "react-router-dom";

import '../ActiveLink/ActiveLink.css';

const ActiveLink = ({to,children}) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({isActive}) => isActive ? "active" : ""
        }
      >
        {children}
      </NavLink>
      ;
    </div>
  );
};

export default ActiveLink;
