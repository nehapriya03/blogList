import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions";
import UserHeader from "./UserHeader";

const PostList = ({ posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  const renderList = () => {
    return posts.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="ui container">
      <div className="ui relaxed divided list">{renderList()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};

export default connect(mapStateToProps, fetchPosts)(PostList);
