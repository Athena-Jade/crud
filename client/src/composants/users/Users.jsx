import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([
    {
      //name:"Titi", email:"titi@gmail.com", age:26
    },
  ]);

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then(result => setUsers(result.data))
      .catch(err => console.log(err));
  }, []);

  const handleDelete =(id) => {
    axios.delete("http://localhost:3001/deleteUser/" +id)
    .then(res => {console.log(res)     
      window.location.reload()})
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          add user
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr >
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.age}</td>
                  <td>
                    <Link 
                      to={`/update/${user._id}`}
                      className="btn btn-success"
                    >
                      update
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;