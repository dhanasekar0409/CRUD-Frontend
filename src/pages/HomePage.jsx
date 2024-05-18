import "axios";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const HomePage = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const results = await axios.get("http://localhost:8080/users");
    setUsers(results.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    getUsers();
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
                    <Link to={`/editUser/${user.id}`} className="btn btn-outline-primary mx-2">
                      edit
                    </Link>
                    <Link
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                      className="btn btn-danger mx-2"
                    >
                      delete
                    </Link>
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
