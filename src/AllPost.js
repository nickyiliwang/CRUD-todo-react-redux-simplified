// renders all posts
import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditComponents from "./EditComponents";

export class AllPost extends Component {
  render() {
    return (
      <div>
        <h1>All Posts</h1>
        {this.props.posts.map(post => (
          <div key={post.id}>
            {post.editing ? (
              <EditComponents key={post.id} post={post} />
            ) : (
              <Post key={post.id} post={post} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state
  };
};

export default connect(mapStateToProps)(AllPost);
