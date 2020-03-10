import React, { useEffect, useState } from "react";
import { Redirect, NavLink } from "react-router-dom";
import { Button } from "antd";
import classes from "./User.module.css";

function User({ match }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    const fetchUser = await fetch(
      `http://localhost:3002/list/?_id=${match.params.id}`
    );
    const user = await fetchUser.json();

    setUser(user[0]);
  };

  if (user === undefined) return <Redirect to="/notFound" />;

  return (
    user && (
      <div>
        <NavLink to={`/`}>
        <button className={classes.button}>back home</button>
          </NavLink>
        <ul className={classes.container}>
        <li className={classes.string}>
        <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></img>
            {"is active: " + user.isActive.toString()}
          </li>
          
          <li className={classes.string}>
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></img>
            {"balance: " + user.balance}
          </li>
          <li className={classes.string}>
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></img>
            {"age: " + user.age}
          </li>
          <li className={classes.string}>
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></img>
            {"eye color: " + user.eyeColor}
          </li>
          <li className={classes.string}>
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></img>
            {"first name: " + user.name.first}
          </li>
          <li className={classes.string}>
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></img>
            {"last name: " + user.name.last}
          </li>
          <li className={classes.string}>
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></img>
            {"company: " + user.company}
          </li>
          <li className={classes.string}>
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></img>
            {"email: " + user.email}
          </li>
          <li className={classes.string}>
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></img>
            {"phone: " + user.phone}
          </li>
          <li className={classes.string}>
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"></img>
            {"registered: " + user.registered}
          </li>
        </ul>
      </div>
    )
  );
}

export default User;
