import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../Actions";
// import { memoize } from "lodash/memoize";

const UserHeader = ({ userId, user, fetchUser }) => {
  console.log(userId);

  useEffect(() => {
    fetchUser(userId);
  });

  const renderList = () => {
    if (!user) {
      return null;
    }
    console.log(user.name);
    return <div className="header">{user.name}</div>;
  };

  return <div> {renderList()}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find((user) => user.id === ownProps.userId),
  };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
