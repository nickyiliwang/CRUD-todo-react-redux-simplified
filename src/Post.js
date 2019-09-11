import React, { Component } from "react";
import { connect } from "react-redux";

export class Post extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.post.title}</h2>
        <p>{this.props.post.message}</p>
        <button
          onClick={() =>
            this.props.dispatch({ type: "EDIT_POST", id: this.props.post.id })
          }
        >
          EDIT
        </button>
        <button
          onClick={() =>
            this.props.dispatch({ type: "DELETE_POST", id: this.props.post.id })
          }
        >
          DELETE
        </button>
      </div>
    );
  }
}

export default connect()(Post);
