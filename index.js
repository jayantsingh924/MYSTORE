 
const express = require('express');
const Home = require('./routes/home');
const app = express();


app.use('/', Home);





app.listen(4000, ()=>{
    console.log("Server is running on port http://127.0.0.1:4000/");
});