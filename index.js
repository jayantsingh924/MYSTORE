 
const express = require('express');
const Home = require('./routes/home');
const path = require('path');
const app = express();


// Serve static files from the 'node_modules' directory
app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(__dirname));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', Home);





app.listen(4000, ()=>{
    console.log("Server is running on port http://127.0.0.1:4000/");
});