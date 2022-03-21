import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUsers } from "./features/userSlice";
import "./Users.css";

function Users() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch(); //to push the data to redux
  const navigate = useNavigate();
  const addUser = () => {
    dispatch(
      addUsers({
        name: name,
        email: email,
      })
    );
    navigate("/users-list");
  };
  return (
    <div className="users">
      <h1>Add Users</h1>
      <div className="users-input">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
        />
        <button onClick={addUser} className="users-button">
          Add User
        </button>
      </div>
    </div>
  );
}

export default Users;
