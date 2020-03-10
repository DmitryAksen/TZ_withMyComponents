import React, { useState } from "react";
import classes from './Pagination.module.css';
// import { NavLink } from "react-router-dom";
const Pagination = ({ postPerPage, totalPosts, paginate }) => {


  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={classes.wrapper}>



  <div className={classes.pagination}>

  {pageNumbers.map(number => (
 
          <a href='/' key={number} 
        
            onClick={(event) => {
              paginate(number);
              event.preventDefault();
            }}
          >
            {number}
          </a>


      ))}

</div>



  </div>
  );
};

export default Pagination;
