import React, { Fragment, useContext } from 'react'
import { NavLink } from 'react-router-dom';
import AuthContext from './auth-context';

const MainHeader=() =>{
  const authCtx= useContext(AuthContext)
  const isLoggedIn =authCtx.isLoggedIn;
  const logoutHandler=()=>{
      authCtx.logout();
  }


  return (
      <Fragment>
    <div className="up">
<h3 className="h3">
    {!isLoggedIn &&(
<NavLink className="a" to="/auth">
    Login
  </NavLink>
  )}
  <NavLink className="a" to="/home">
    HOME
  </NavLink>
  {isLoggedIn &&(
  <NavLink className="a" to="/store">
    STORE
  </NavLink>
  )}
  <NavLink className="a" to="/about">
    ABOUT
  </NavLink>
  <NavLink className="a" to="/contactus">
    CONTACT US
  </NavLink>
  {isLoggedIn &&(
  <NavLink className="a" to="/profile">
    Profile
  </NavLink>
  )}
    {isLoggedIn &&(
     <button onClick={logoutHandler}>Logout</button>
    )}
</h3>
</div>
<div className="down">
        <h1 className="h1">The Generics</h1>
      </div>
</Fragment>
  )
}

export default MainHeader;

