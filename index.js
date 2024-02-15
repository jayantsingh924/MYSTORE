 
const express = require('express');
const path = require('path');

const Home = require('./routes/home');
const addProduct = require('./routes/addProduct');
const editProduct = require('./routes/editProduct');

const app = express();


// Serve static files from the 'node_modules' directory
app.use('/static', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(__dirname));

app.set('view engine', 'ejs');
app.set('views', 'views');



app.use('/', Home);
app.use('/add-product',addProduct);
app.use('/edit-product', editProduct);





app.listen(4000, ()=>{
    console.log("Server is running on port http://127.0.0.1:4000/");
});