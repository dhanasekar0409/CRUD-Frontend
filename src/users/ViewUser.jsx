import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewUser = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-xl-6 offset-xl-3 border rounded p-4 mt-2 shadow">
          <h2 className="m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              <span className="fw-bold h">id:</span>
              {user.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="fw-bold">Name: </span>
                  {user.name}
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Username:</span>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Email: </span>
                  {user.email}
                </li>
              </ul>
            </div>
          </div>

          <Link className="btn btn-primary my-2" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
