//1) ajouter express, mongoose, cors
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//5) importer
const UserModel = require("./models/Users.jsx");

//2) creer app
const app = express();
app.use(cors());
app.use(express.json());

//4)connextion database   mongodb://localhost:27017
mongoose.connect("mongodb://127.0.0.1:27017/crud");

//7) api
app.get("/", (req, res) => {
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err));
});

//8) update user
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then(users => res.json(users))
    .catch(err => res.json(err));
});



//9)updateUser
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(
    {_id: id},
    { 
      name: req.body.name,
      email: req.body.email,
      age: req.body.age 
    })    
    .then(users => res.json(users))
    .catch(err => res.json(err)) 
});



//10) delete
app.delete("/deleteUser/:id", (req, res) =>{
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(res => res.json(res))
  .catch(err=> res.json(err))
})


//6) creer api
app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

//3) lancer le server
app.listen(3001, () => {
  console.log("server running");
});
