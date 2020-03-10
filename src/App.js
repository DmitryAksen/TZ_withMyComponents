import React, { useEffect, useState } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Pagination from "./components/Pagination/Pagination";
import User from "./components/User/User";
import AllUsers from "./components/AllUsers/AllUsers";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [search, setSearch] = useState("");
 





  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    fetch("http://localhost:3002/list")
      .then(res => res.json())
      .then(json => {
        setItems(json);
      });
  };

  let filteredItems = items.filter(item => {
    return item.email.toLowerCase().includes(search.toLowerCase()) !== false;
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredItems.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <Route exact path="/">
        <Pagination
          postPerPage={postsPerPage}
          totalPosts={filteredItems.length}
          paginate={paginate}
        />
        <AllUsers items={currentPosts} setSearch={setSearch} search={search} />
      </Route>

      <Switch>
        <Route exact path="/Details/:id" component={User} />
      </Switch>

      <Route path="/notFound" component={NotFound} />
    </div>
  );
}

export default App;
