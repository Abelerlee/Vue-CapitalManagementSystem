const express = require("express");
const mongoose = require('mongoose');
const app = express();

//引入userJs
const users = require("./routes/api/user")


// DB config
const db = require ("./config/keys").mongoURL;

//Connect to mogodb
mongoose.connect(db)
       .then(() => console.log('MongoDB Connected'))
       .catch(err => console.log(err));



app.get("/",(req,res) => {
    res.send("Hello World");
})

//使用router
app.use("/api/users",users);


const port = process.env.PORT || 5000;

app.listen(port,() => {
    console.log('Server running on port ${port}');
})