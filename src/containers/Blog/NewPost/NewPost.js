import React, { Component } from "react";
import axios from "axios";

import "./NewPost.css";

class NewPost extends Component {
    state={
        title:'',
        content:'',
        author:'max'
    }
    postDataHandler=()=>{
        const data={
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data).then(response =>{
            console.log(response);
        });
    }
  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input type="text" />
        <label>Content</label>
        <textarea />
        <label>Author</label>
        <input type="text" />
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
