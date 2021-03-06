import React, { Component } from "react";
import Post from "../../components/Post/Post";
import axios from 'axios';
import './Posts.css';
import {Link} from 'react-router-dom';

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
  };
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then((response) => {
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map((post) => {
        return {
          ...post,
          author: "Max",
        };
      });
      this.setState({ posts: updatedPosts });
      // console.log(response);
    });
  }
  postSelectedHandler = (id) => {
    this.setState({ selectedPostId: id });
  };

  render() {
    const posts = this.state.posts.map((post) => {
      return (
        <Link to={'/' +post.id}  key={post.id}>
        <Post
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
        </Link>
      );
    });
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
