import React, { Component, Suspense } from "react";
//import axios from "axios";
import "./Blog.css";
import Posts from "../Posts/Posts";
import FullPost from "../Blog/FullPost/FullPost";
// import NewPost from "../Blog/NewPost/NewPost";
import { Route, NavLink, Switch } from "react-router-dom";
//import asyncComponent from '../../hoc/asyncComponent';

const NewPost = React.lazy(() => {
  return import("../Blog/NewPost/NewPost");
});

class Blog extends Component {
  render() {
    return (
      <div>
        <header className="Blog">
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/" exact component={Posts} />
          <Route
            path="/new-post"
            render={() => <Suspense fallback={<div>Loading...</div>}><NewPost /></Suspense>}
          />
          <Route path="/:id" exact component={FullPost} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
