import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../Actions";

const UserHeader = ({ userIds, users }) => {
  console.log(userIds);

  useEffect(() => {
    fetchUser(userIds);
  }, []);

  const renderList = () => {
    const user = users.find((user) => user.id === userIds);
    if (!user) {
      return null;
    }
    console.log(user.name);
    return <div className="header">This is user name {user.name}</div>;
  };

  return <div>{renderList()}</div>;
};

const mapStateToProps = (users) => {
  return {
    users: users.users,
  };
};

export default connect(mapStateToProps, fetchUser)(UserHeader);
