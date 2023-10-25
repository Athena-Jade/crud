import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function CreateUser() {
  //après avoir fait connexion avec mongodb
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();

  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", { name, email, age })      
      .then(result => {
        console.log(result)
        navigate('/')
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={Submit}>            
            <div className="mb-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                placeholder="enter name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">email</label>
              <input
                type="email"
                placeholder="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">age</label>
              <input
                type="text"
                placeholder="enter age"
                className="form-control"
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <button className="btn btn-success">submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateUser;
