import "axios";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const results = await axios.get("http://localhost:8080/users");
    setUsers(results.data);
  };

  return (
    <>
      <div className="container">
        <div className="py-4">
          <table className="table table-bordered table-hover shadow">
            <thead>
              <tr>
                <th className="col">id</th>
                <th className="col">Name</th>
                <th className="col">Username</th>
                <th className="col">Email</th>
                <th className="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-primary mx-2">view</button>
                    <button className="btn btn-outline-primary mx-2">edit</button>
                    <button className="btn btn-danger mx-2">delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HomePage;
