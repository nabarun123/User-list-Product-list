import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./UsersList";

function UsersList() {
  const user = useSelector(selectUser); //to pull the data from redux

  return (
    <div>
      {user?.map((item, index) => (
        <>
          <h6>Name:{item.name}</h6>
          <h6>Email:{item.email}</h6>
        </>
      ))}
    </div>
  );
}

export default UsersList;
