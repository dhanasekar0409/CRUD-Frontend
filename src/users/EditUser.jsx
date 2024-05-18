import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditUser = () => {
  const navigate = useNavigate("/");
  const { id } = useParams();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const { name, username, email } = user;

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-xl-6 offset-xl-3 border rounded p-4 mt-2 shadow">
            <h2 className="m-4">Edit User</h2>
            <form onSubmit={(e) => onSubmit(e)}>
              <div className="mb-3">
                <label htmlFor="Name" className="col-form-label fw-bold ms-1">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="col-form-label fw-bold ms-1">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your username"
                  name="username"
                  value={username}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="col-form-label fw-bold ms-1">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
              <Link to="/" className="btn btn-outline-danger mx-2">
                Cancel
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditUser;
