const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register');
const UserModel = require('./models/User');

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test');

app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    RegisterModel.findOne({email: email})
    .then(user =>{
        if(user){
            res.json("User already registered!")
        } else{
            RegisterModel.create({name:name, email:email, password: password})
            .then(result => res.json("Account created"))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})

app.post("/login", (req, res) =>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Login successful")
            } else{
                res.json("The password is incorrect")
            }
        } else{
            res.json("No record")
        }
    })
})

app.listen(3001, () => {
    console.log("server is running");
})