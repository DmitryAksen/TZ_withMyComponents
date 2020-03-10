import React from "react";
import { Result, Button } from 'antd';
import { NavLink } from "react-router-dom";
import classes from './NotFound.module.css'



const NotFound = props => {
  return (
//   <Result
//   status="404"
//   title="404"
//   subTitle="Sorry, the page you visited does not exist."
  
//   extra={
//     <NavLink to="/">
//   <Button type="primary">Back Home</Button>
//   </NavLink>
//   }
// />

<div className={classes.wrapper}>
    <div className={classes.container}>
        <h1>404</h1>
        <h2>We cannot find the page you are looking for.</h2>
        <h4>The page you requested was not found in the database.<br/> Most likely you got on a broken link or were sealed when you enter the URL</h4>
        <p className={classes.box_in}>
        
        {/* <a href="/">Go to home page</a> */}
            <NavLink to="/">
   <Button type="primary">Go to home page</Button>
   </NavLink>
        </p>
    </div>
</div>


  )
};

export default NotFound;
