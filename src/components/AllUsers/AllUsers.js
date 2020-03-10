import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./AllUsers.module.css";

import Input from "../Input/Input";


class AllUsers extends React.Component {
  updateSearch(e) {
    let str = e.target.value.substr(0, 20);
    let { setSearch } = this.props;
    setSearch(str);
  }
  render() {
    let { items, search, setSearch } = this.props;

    return (
      <div className={classes.wraper}>
        <h1 className={classes.title}>
          Clients
          </h1>

        <Input search={search} setSearch={setSearch} />

        
        {/* <List
          type="flex"
          align="middle"
          itemLayout="horizontal"
          dataSource={items}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                title={item.name.first + " " + item.name.last}
                description={
                  <NavLink className="myLink" to={`/Details/${item._id}`}>
                    {item.email}
                  </NavLink>
                }
              />
            </List.Item>
          )}
        /> */}

        <div className={classes.container}>
          <div className={classes.grid}>
            {items.map(item => (
              <div key={item._id} className={classes.item}>
                <span>{item.name.first + " " + item.name.last}</span>

                <span>
                  <NavLink activeClassName={classes.active} className={classes.myLink} to={`/Details/${item._id}`}>
                    {item.email}
                  </NavLink>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AllUsers;
